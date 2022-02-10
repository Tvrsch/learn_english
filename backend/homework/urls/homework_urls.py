from django.urls import path
from homework.views import homework_views as views


urlpatterns = [
    path("", views.get_homework_paragraphs, name="homework-get"),
    path("add/", views.add_homework_paragraph, name="homework-add"),
    path("generate/", views.get_generated_homework, name="homework-generate"),
    path("send/", views.send_homework, name="homework-send"),
    path("<str:pk>/update/", views.update_homework_paragraph, name="homework-update"),
    path("<str:pk>/delete/", views.delete_homework, name="homework-delete"),
]
