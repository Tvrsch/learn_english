from django.urls import path
from homework.views import presentation_views as views


urlpatterns = [
    path("", views.get_presentations, name="presentations"),
    path("add/", views.add_presentation, name="presentation-add"),
    path("update/<str:pk>/", views.update_presentation, name="presentation-update"),
    path("delete/<str:pk>/", views.delete_presentation, name="presentation-delete"),
]
