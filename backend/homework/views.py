from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Student, Presentation, HomeworkParagraph, StudentProgress
from .serializers import (
    StudentSerializer,
    PresentationSerializer,
    HomeworkParagraphSerializer,
    StudentProgressSerializer,
)


@api_view(["GET"])
def get_students(request):
    students = Student.objects.all()
    serializer = StudentSerializer(students, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def get_presentations(request):
    presentations = Presentation.objects.all()
    serializer = PresentationSerializer(presentations, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def get_student_progress(request):
    student_id = request.query_params.get("id")

    student = Student.objects.get(id__exact=student_id)

    student_progress = StudentProgress.objects.filter(student=student)

    serializer = StudentProgressSerializer(student_progress, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def get_homework_paragraphs(request):
    current_slide = request.query_params.get("current_slide")
    presentation_name = request.query_params.get("presentation")

    presentation = Presentation.objects.get(name__exact=presentation_name)

    homework_paragraphs = HomeworkParagraph.objects.filter(
        presentation=presentation, slides_required__lte=current_slide
    )

    serializer = HomeworkParagraphSerializer(homework_paragraphs, many=True)
    return Response(serializer.data)
