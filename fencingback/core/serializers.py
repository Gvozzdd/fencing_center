# core/serializers.py
from rest_framework import serializers
from .models import News, Review, Enrollment

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrollment
        fields = '__all__'

    def validate_name(self, value):
        if not value:
            raise serializers.ValidationError("Имя обязательно")
        return value

    def validate_email(self, value):
        if not value:
            raise serializers.ValidationError("Email обязателен")
        if not "@" in value or not "." in value:
            raise serializers.ValidationError("Email некорректен")
        return value

    def validate_phone(self, value):
        if not value:
            raise serializers.ValidationError("Телефон обязателен")
        if not value.isdigit() or len(value) < 10 or len(value) > 15:
            raise serializers.ValidationError("Телефон некорректен")
        return value

    def validate_age(self, value):
        if not value:
            raise serializers.ValidationError("Возраст обязателен")
        if value <= 0:
            raise serializers.ValidationError("Возраст должен быть положительным числом")
        return value
