from django.urls import path
from homework.views import student_views as views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", views.get_students, name="students-get"),
    path("add/", views.add_student, name="student-add"),
    path("<str:pk>/update/", views.update_student, name="student-update"),
    path("<str:pk>/delete/", views.delete_student, name="student-delete"),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
