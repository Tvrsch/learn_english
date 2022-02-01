from rest_framework.decorators import api_view
from rest_framework.response import Response
from homework.models import StudentProgress, Student, Presentation
from homework.serializers import StudentProgressSerializer


@api_view(["GET"])
def get_student_progress(request, pk):
    student = Student.objects.get(id=pk)

    student_progress = StudentProgress.objects.filter(student=student)

    serializer = StudentProgressSerializer(student_progress, many=True)
    return Response(serializer.data)


@api_view(["POST"])
def add_student_progress(request):
    data = request.data

    student = Student.objects.get(id__exact=data.get("student_id"))
    presentation = Presentation.objects.get(id__exact=data.get("presentation_id"))

    progress = StudentProgress.objects.create(
        student=student,
        presentation=presentation,
        current_slide=data.get("current_slide"),
    )
    serializer = StudentProgressSerializer(progress, many=False)
    return Response(serializer.data)


@api_view(["PUT"])
def update_student_progress(request, pk):
    progress = StudentProgress.objects.get(id=pk)
    progress.current_slide = request.data.get("current_slide")
    progress.save()

    serializer = StudentProgressSerializer(progress, many=False)
    return Response(serializer.data)
