from rest_framework.decorators import api_view
from rest_framework.response import Response
from homework.models import Presentation
from homework.serializers import PresentationSerializer


@api_view(["GET"])
def get_presentations(request):
    presentations = Presentation.objects.all()
    serializer = PresentationSerializer(presentations, many=True)
    return Response(serializer.data)


@api_view(["POST"])
def add_presentation(request):
    name = request.data.get("name", "Sample Name")
    book = request.data.get("book", "Sample Book")
    diff_level = request.data.get("diff_level", "Unknown")
    total_slides = request.data.get("total_slides", 0)

    presentation = Presentation.objects.create(
        name=name,
        book=book,
        total_slides=total_slides,
        diff_level=diff_level,
    )
    serializer = PresentationSerializer(presentation, many=False)
    return Response(serializer.data)


@api_view(["PUT"])
def update_presentation(request, pk):
    data = request.data
    presentation = Presentation.objects.get(id=pk)

    presentation.name = data.get("name")
    presentation.book = data.get("book")
    presentation.total_slides = data.get("total_slides")
    presentation.diff_level = data.get("diff_level")

    presentation.save()

    serializer = PresentationSerializer(presentation, many=False)
    return Response(serializer.data)


@api_view(["DELETE"])
def delete_presentation(request, pk):
    student = Presentation.objects.get(id=pk)
    student.delete()

    return Response("Presentation Deleted")
