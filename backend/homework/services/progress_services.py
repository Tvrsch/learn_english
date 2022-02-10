from django.core.mail import send_mail
from django.conf import settings
from django.db.models import QuerySet
from homework.models import HomeworkParagraph, Presentation, Student, StudentProgress


def get_student_progress_(student_id: int) -> QuerySet:
    student = Student.objects.get(id=student_id)
    student_progress = StudentProgress.objects.filter(student=student)
    return student_progress


def upsert_student_progress_(data: dict) -> StudentProgress:
    student = Student.objects.get(id=data.get("student_id"))
    presentation = Presentation.objects.get(id=data.get("presentation_id"))

    if StudentProgress.objects.filter(
        student=student, presentation=presentation
    ).exists():
        progress = StudentProgress.objects.get(
            student=student, presentation=presentation
        )
        progress.current_slide = data.get("current_slide")
        progress.save()
    else:
        progress = StudentProgress.objects.create(
            student=student,
            presentation=presentation,
            current_slide=data.get("current_slide"),
        )
    return progress


def update_student_progress_(data: dict, pk: int) -> StudentProgress:
    progress = StudentProgress.objects.get(id=pk)
    progress.current_slide = request.data.get("current_slide")
    progress.save()
    return progress
