from django.urls import path
from homework.views import student_views as views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.get_students, name='students'),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)