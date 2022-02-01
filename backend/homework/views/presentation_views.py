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
    presentation = Presentation.objects.create(
        name="Sample Name",
        book="Sample Book",
        total_slides=0,
        diff_level="Unknown",
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
    presentation.diff_level = data.get('diff_level')

    presentation.save()

    serializer = PresentationSerializer(presentation, many=False)
    return Response(serializer.data)


@api_view(["DELETE"])
def delete_presentation(request, pk):
    student = Presentation.objects.get(id=pk)
    student.delete()

    return Response("Presentation Deleted")
