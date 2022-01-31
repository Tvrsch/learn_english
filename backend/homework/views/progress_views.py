from rest_framework.decorators import api_view
from rest_framework.response import Response
from homework.models import StudentProgress, Student
from homework.serializers import StudentProgressSerializer


@api_view(["GET"])
def get_student_progress(request):
    student_id = request.query_params.get("id")

    student = Student.objects.get(id__exact=student_id)

    student_progress = StudentProgress.objects.filter(student=student)

    serializer = StudentProgressSerializer(student_progress, many=True)
    return Response(serializer.data)
