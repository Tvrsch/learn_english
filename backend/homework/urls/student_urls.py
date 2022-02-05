from django.urls import path
from homework.views import student_views as views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", views.get_students, name="students-get"),
    path("add/", views.add_student, name="student-add"),
    path("update/<str:pk>/", views.update_student, name="student-update"),
    path("delete/<str:pk>/", views.delete_student, name="student-delete"),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
