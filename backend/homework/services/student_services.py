from django.core.mail import send_mail
from django.conf import settings
from django.db.models import QuerySet
from homework.models import HomeworkParagraph, Presentation, Student


def add_student_(data: dict) -> Student:
    name = data.get("name", "Sample Name")
    mail = data.get("mail", "sample@mail.ru")
    diff_level = data.get("diff_level", "Unknown")

    student = Student.objects.create(
        name=name,
        mail=mail,
        diff_level=diff_level,
    )
    return student


def update_student_(data: dict, pk: int) -> Student:
    student = Student.objects.get(id=pk)
    student.name = data.get("name")
    student.mail = data.get("mail")
    student.diff_level = data.get("diff_level")

    student.save()
    return student


def upload_image_(data: dict) -> str:
    student_id = data["student_id"]
    student = Student.objects.get(id=student_id)

    student.picture = request.FILES.get("image")
    student.save()
    return "Image was uploaded"
