# core/admin.py
from django.contrib import admin
from .models import News, Review, Enrollment

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    search_fields = ('title', 'content')
    list_filter = ('created_at',)

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('author', 'created_at')
    search_fields = ('author', 'text')
    list_filter = ('created_at',)

@admin.register(Enrollment)
class EnrollmentAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'age', 'style')
    search_fields = ('name', 'email', 'phone')
    list_filter = ('style',)
