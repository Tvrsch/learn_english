from rest_framework.decorators import api_view
from rest_framework.response import Response
from homework.models import Student
from homework.serializers import StudentSerializer


@api_view(["GET"])
def get_students(request):
    students = Student.objects.all()
    serializer = StudentSerializer(students, many=True)
    return Response(serializer.data)


@api_view(["POST"])
def add_student(request):
    student = Student.objects.create(
        name="Sample Name",
        mail="sample@mail.ru",
        diff_level="Unknown",
    )
    serializer = StudentSerializer(student, many=False)
    return Response(serializer.data)


@api_view(["PUT"])
def update_student(request, pk):
    data = request.data
    student = Student.objects.get(id=pk)

    student.name = data.get("name")
    student.mail = data.get("mail")
    student.diff_level = data.get('diff_level')

    student.save()

    serializer = StudentSerializer(student, many=False)
    return Response(serializer.data)


@api_view(["DELETE"])
def delete_student(request, pk):
    student = Student.objects.get(id=pk)
    student.delete()

    return Response("Student Deleted")