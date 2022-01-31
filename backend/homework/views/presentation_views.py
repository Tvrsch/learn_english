from rest_framework.decorators import api_view
from rest_framework.response import Response
from homework.models import Presentation
from homework.serializers import PresentationSerializer


@api_view(["GET"])
def get_presentations(request):
    presentations = Presentation.objects.all()
    serializer = PresentationSerializer(presentations, many=True)
    return Response(serializer.data)
