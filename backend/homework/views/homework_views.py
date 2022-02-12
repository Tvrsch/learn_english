from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from homework.models import HomeworkParagraph, Presentation, Student
from homework.serializers import HomeworkParagraphSerializer
from django.conf import settings
from django.core.mail import send_mail
from homework.services.homework_services import (
    get_homework_paragraphs_by_id,
    add_homework_paragraph_,
    update_homework_paragraph_,
    get_homework_paragraphs_by_name,
    generate_homework,
)


@api_view(["GET"])
def get_homework_paragraphs(request):
    homework_paragraphs = get_homework_paragraphs_by_id(
        request.query_params.get("presentation_id")
    )
    page = request.query_params.get("page")
    paginator = Paginator(homework_paragraphs, 4)

    try:
        homework_paragraphs = paginator.page(page)
    except PageNotAnInteger:
        homework_paragraphs = paginator.page(1)
    except EmptyPage:
        homework_paragraphs = paginator.page(paginator.num_pages)

    if not page:
        page = 1
    page = int(page)
    serializer = HomeworkParagraphSerializer(homework_paragraphs, many=True)
    return Response(
        {
            "homework": serializer.data,
            "page": page,
            "pages": paginator.num_pages,
        }
    )


@api_view(["POST"])
def add_homework_paragraph(request):
    paragraph = add_homework_paragraph_(request.data)
    serializer = HomeworkParagraphSerializer(paragraph, many=False)
    return Response(serializer.data)


@api_view(["PUT"])
def update_homework_paragraph(request, pk):
    paragraph = update_homework_paragraph_(pk, request.data)

    serializer = HomeworkParagraphSerializer(paragraph, many=False)
    return Response(serializer.data)


@api_view(["DELETE"])
def delete_homework(request, pk):
    homework = HomeworkParagraph.objects.get(id=pk)
    homework.delete()

    return Response("Homework Deleted")


@api_view(["GET"])
def get_generated_homework(request):
    homework_paragraphs = get_homework_paragraphs_by_name(
        request.query_params.get("presentation_name"),
        request.query_params.get("current_slide"),
    )
    homework = generate_homework(homework_paragraphs)
    return Response({"homework": homework})


@api_view(["POST"])
def send_homework(request):
    data = request.data
    student = Student.objects.get(id=data.get("student_id"))
    send_mail(
        data.get("subject"),
        data.get("homework"),
        settings.DEFAULT_FROM_EMAIL,
        [student.mail],
    )
    return Response({"success": True})
