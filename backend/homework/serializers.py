from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Student, Presentation, HomeworkParagraph, StudentProgress


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = "__all__"


class PresentationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Presentation
        fields = "__all__"


class HomeworkParagraphSerializer(serializers.ModelSerializer):
    presentation = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = HomeworkParagraph
        fields = "__all__"

    def get_presentation(self, obj):
        return obj.presentation.name


class StudentProgressSerializer(serializers.ModelSerializer):
    presentation = serializers.SerializerMethodField(read_only=True)
    student = serializers.SerializerMethodField(read_only=True)
    picture = serializers.SerializerMethodField(read_only=True)
    total_slides = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = StudentProgress
        fields = "__all__"

    def get_presentation(self, obj):
        return obj.presentation.name

    def get_student(self, obj):
        return obj.student.name

    def get_picture(self, obj):
        return f"/images/{obj.presentation.picture}"

    def get_total_slides(self, obj):
        return obj.presentation.total_slides


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    is_admin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ["id", "_id", "username", "email", "name", "is_admin"]

    def get__id(self, obj):
        return obj.id

    def get_is_admin(self, obj):
        return obj.is_staff

    def get_name(self, obj):
        name = getattr(obj, "first_name", None)
        if not name:
            name = obj.email
        return name


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ["id", "_id", "username", "email", "name", "is_admin", "token"]

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)