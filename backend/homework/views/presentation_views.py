from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from homework.models import Presentation
from homework.serializers import PresentationSerializer
from homework.services.presentation_services import (
    add_presentation_,
    update_presentation_,
    upload_image_,
)


@api_view(["GET"])
def get_presentations(request):
    presentations = Presentation.objects.all()
    page = request.query_params.get("page")
    paginator = Paginator(presentations, 4)

    try:
        presentations = paginator.page(page)
    except PageNotAnInteger:
        presentations = paginator.page(1)
    except EmptyPage:
        presentations = paginator.page(paginator.num_pages)

    if not page:
        page = 1
    page = int(page)
    serializer = PresentationSerializer(presentations, many=True)
    return Response(
        {"presentations": serializer.data, "page": page, "pages": paginator.num_pages}
    )


@api_view(["POST"])
def add_presentation(request):
    presentation = add_presentation_(request.data)
    serializer = PresentationSerializer(presentation, many=False)
    return Response(serializer.data)


@api_view(["PUT"])
def update_presentation(request, pk):
    presentation = update_presentation_(request.data, pk)
    serializer = PresentationSerializer(presentation, many=False)
    return Response(serializer.data)


@api_view(["POST"])
def upload_image(request):
    result = upload_image_(request.data)
    return Response(result)


@api_view(["DELETE"])
def delete_presentation(request, pk):
    student = Presentation.objects.get(id=pk)
    student.delete()

    return Response("Presentation Deleted")
