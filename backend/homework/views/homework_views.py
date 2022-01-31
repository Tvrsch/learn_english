from rest_framework.decorators import api_view
from rest_framework.response import Response
from homework.models import HomeworkParagraph, Presentation
from homework.serializers import HomeworkParagraphSerializer


@api_view(["GET"])
def get_homework_paragraphs(request):
    current_slide = request.query_params.get("current_slide")
    presentation_name = request.query_params.get("presentation")

    presentation = Presentation.objects.get(name__exact=presentation_name)

    homework_paragraphs = HomeworkParagraph.objects.filter(
        presentation=presentation, slides_required__lte=current_slide
    )

    serializer = HomeworkParagraphSerializer(homework_paragraphs, many=True)
    return Response(serializer.data)
