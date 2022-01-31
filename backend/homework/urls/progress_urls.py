from django.urls import path
from homework.views import progress_views as views


urlpatterns = [
    path('', views.get_student_progress, name='student progress'),
]
