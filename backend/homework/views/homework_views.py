from rest_framework.decorators import api_view
from rest_framework.response import Response
from homework.models import HomeworkParagraph, Presentation, Student
from homework.serializers import HomeworkParagraphSerializer
from homework.services import generate_homework
from django.conf import settings
from django.core.mail import send_mail


@api_view(["GET"])
def get_homework_paragraphs(request):
    presentation_id = request.query_params.get("presentation_id")
    presentation = Presentation.objects.get(id=presentation_id)

    homework_paragraphs = HomeworkParagraph.objects.filter(presentation=presentation)

    serializer = HomeworkParagraphSerializer(homework_paragraphs, many=True)
    return Response(serializer.data)


@api_view(["POST"])
def add_homework_paragraph(request):
    presentation = Presentation.objects.get(id=request.data.get("presentation_id"))
    paragraph = HomeworkParagraph.objects.create(
        presentation=presentation,
        task_text=request.data.get("task_text", ""),
        slides_required=request.data.get("slides_required", 1),
    )
    serializer = HomeworkParagraphSerializer(paragraph, many=False)
    return Response(serializer.data)


@api_view(["PUT"])
def update_homework_paragraph(request, pk):
    data = request.data

    paragraph = HomeworkParagraph.objects.get(id=pk)
    paragraph.slides_required = data.get("slides_required", 1)
    paragraph.task_text = data.get("task_text", "")
    paragraph.save()

    serializer = HomeworkParagraphSerializer(paragraph, many=False)
    return Response(serializer.data)


@api_view(["DELETE"])
def delete_homework(request, pk):
    homework = HomeworkParagraph.objects.get(id=pk)
    homework.delete()

    return Response("Homework Deleted")


@api_view(["GET"])
def get_generated_homework(request):
    presentation_name = request.query_params.get("presentation_name")
    print(presentation_name)
    current_slide = request.query_params.get("current_slide")
    presentation = Presentation.objects.get(name=presentation_name)

    homework_paragraphs = HomeworkParagraph.objects.filter(
        presentation=presentation, slides_required__lte=current_slide
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
