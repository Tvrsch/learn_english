from django.urls import path
from homework.views import progress_views as views

# fmt: off
urlpatterns = [
    path("add/", views.add_student_progress, name="add student progress"),
    path("", views.get_student_progress, name="get student progress"),
    path("<str:pk>/update/", views.update_student_progress, name="update student progress"),
    path("<str:pk>/delete/", views.delete_student_progress, name="delete student progress"),
]
# fmt: on
