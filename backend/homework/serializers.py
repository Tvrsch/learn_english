from rest_framework import serializers
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
