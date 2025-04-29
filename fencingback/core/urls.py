# core/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.Home.as_view(), name='home'),
    path('about/', views.About.as_view(), name='about'),
    path('services/', views.Services.as_view(), name='services'),
    path('news/', views.News.as_view(), name='news'),
    path('gallery/', views.Gallery.as_view(), name='gallery'),
    path('reviews/', views.Reviews.as_view(), name='reviews'),
    path('enrollment/', views.EnrollmentForm.as_view(), name='enrollment'),
    path('api/news/', views.NewsList.as_view(), name='api-news'),
    path('api/reviews/', views.ReviewList.as_view(), name='api-reviews'),
]
