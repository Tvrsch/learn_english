from django.urls import path
from homework.views import user_views as views


urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', views.get_user_profile, name='users-profile'),
    path('', views.get_users, name='users'),
    path('register/', views.register_user, name='register'),
    path('profile/update/', views.update_user_profile, name='users-profile-update'),
    path('update/<str:pk>/', views.update_user, name='user-update'),
    path('<str:pk>/', views.get_user_by_id, name='user'),
    path('delete/<str:pk>/', views.delete_user, name='user-delete'),
]