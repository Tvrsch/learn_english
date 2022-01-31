from django.urls import path
from . import views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('students/', views.get_students, name='students'),
    path('presentations/', views.get_presentations, name='presentations'),
    path('student_progress/', views.get_student_progress, name='student progress'),
    path('homework/', views.get_homework_paragraphs, name='homework')
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)