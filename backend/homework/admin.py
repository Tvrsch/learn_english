from django.contrib import admin
from .models import Student, Presentation, StudentProgress, HomeworkParagraph

admin.site.register([Student, Presentation, StudentProgress, HomeworkParagraph])
