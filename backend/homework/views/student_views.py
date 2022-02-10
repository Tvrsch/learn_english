from rest_framework.decorators import api_view
from rest_framework.response import Response
from homework.models import Student
from homework.serializers import StudentSerializer
from homework.services.student_services import (
    add_student_,
    update_student_,
    upload_image_,
)


@api_view(["GET"])
def get_students(request):
    students = Student.objects.all()
    serializer = StudentSerializer(students, many=True)
    return Response(serializer.data)


@api_view(["POST"])
def add_student(request):
    student = add_student_(request.data)
    serializer = StudentSerializer(student, many=False)
    return Response(serializer.data)


@api_view(["PUT"])
def update_student(request, pk):
    student = update_student_(request.data, pk)
    serializer = StudentSerializer(student, many=False)
    return Response(serializer.data)


@api_view(["POST"])
def upload_image(request):
    result = upload_image_(request.data)
    return Response(result)


@api_view(["DELETE"])
def delete_student(request, pk):
    student = Student.objects.get(id=pk)
    student.delete()

    return Response("Student Deleted")
