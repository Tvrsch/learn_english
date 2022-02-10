from django.db import models


class Student(models.Model):
    name = models.CharField(max_length=200, null=False, blank=False)
    mail = models.CharField(max_length=100, null=False, blank=False)
    diff_level = models.CharField(max_length=100, null=True, blank=True)
    picture = models.ImageField(
        null=True, blank=True, default="/student-placeholder.png"
    )

    def __str__(self):
        return str(self.name)


class Presentation(models.Model):
    name = models.CharField(max_length=200, null=False, blank=False)
    book = models.CharField(max_length=200, null=True, blank=True)
    total_slides = models.IntegerField(null=False, blank=False, default=0)
    diff_level = models.CharField(max_length=100, null=True, blank=True)
    picture = models.ImageField(
        null=True, blank=True, default="/presentation-placeholder.png"
    )

    def __str__(self):
        return str(self.name)


class HomeworkParagraph(models.Model):
    presentation = models.ForeignKey(Presentation, on_delete=models.CASCADE, null=True)
    task_text = models.TextField(null=True, blank=True)
    slides_required = models.IntegerField(null=False, blank=False, default=0)

    def __str__(self):
        return str(self.presentation)


class StudentProgress(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, null=True)
    presentation = models.ForeignKey(Presentation, on_delete=models.CASCADE, null=True)
    current_slide = models.IntegerField(null=True, blank=True, default=0)

    def __str__(self):
        return str(self.student)
