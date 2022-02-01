from django.urls import path
from homework.views import presentation_views as views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.get_presentations, name='presentations'),
    path('add/', views.add_presentation, name='presentation-add'),
    path('update/<str:pk>/', views.update_presentation, name='presentation-update'),
    path('delete/<str:pk>/', views.delete_presentation, name='presentation-delete'),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)