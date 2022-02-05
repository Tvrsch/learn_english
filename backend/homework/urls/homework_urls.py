from django.urls import path
from homework.views import homework_views as views


urlpatterns = [
    path("", views.get_homework_paragraphs, name="homework"),
]
