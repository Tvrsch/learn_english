from django.urls import path
from homework.views import presentation_views as views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.get_presentations, name='presentations'),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)