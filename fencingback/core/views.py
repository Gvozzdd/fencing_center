# core/views.py
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from .serializers import NewsSerializer, ReviewSerializer, EnrollmentSerializer
from .models import News, Review, Enrollment

class Home(APIView):
    def get(self, request):
        return render(request, 'core/home.html')

class About(APIView):
    def get(self, request):
        return render(request, 'core/about.html')

class Services(APIView):
    def get(self, request):
        return render(request, 'core/services.html')

class News(APIView):
    def get(self, request):
        return render(request, 'core/news.html')

class Gallery(APIView):
    def get(self, request):
        return render(request, 'core/gallery.html')

class Reviews(APIView):
    def get(self, request):
        return render(request, 'core/reviews.html')

class EnrollmentForm(APIView):
    def get(self, request):
        return render(request, 'core/enrollment.html')

    def post(self, request):
        serializer = EnrollmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            send_mail(
                'Запись на секцию по фехтованию',
                f'Запись на секцию по фехтованию:\nИмя: {serializer.validated_data["name"]}\nEmail: {serializer.validated_data["email"]}\nТелефон: {serializer.validated_data["phone"]}\nВозраст: {serializer.validated_data["age"]}\nСтиль фехтования: {serializer.validated_data["style"]}',
                'your-email@gmail.com',
                ['recipient-email@example.com'],
                fail_silently=False,
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class NewsList(APIView):
    def get(self, request):
        news = News.objects.all()
        serializer = NewsSerializer(news, many=True)
        return Response(serializer.data)

class ReviewList(APIView):
    def get(self, request):
        reviews = Review.objects.all()
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)
