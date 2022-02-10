from django.urls import path
from homework.views import presentation_views as views


urlpatterns = [
    path("", views.get_presentations, name="presentations"),
    path("add/", views.add_presentation, name="presentation-add"),
    path("upload/", views.upload_image, name="image-upload"),
    path("<str:pk>/update/", views.update_presentation, name="presentation-update"),
    path("<str:pk>/delete/", views.delete_presentation, name="presentation-delete"),
]
