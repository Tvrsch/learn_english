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


@api_view(["POST"])
def add_homework_paragraph(request, pk):
    presentation = Presentation.objects.get(id=pk)
    paragraph = Presentation.objects.create(
        name="Sample Name",
        book="Sample Book",
        total_slides=0,
        diff_level="Unknown",
    )
    serializer = HomeworkParagraphSerializer(presentation, many=False)
    return Response(serializer.data)


@api_view(["PUT"])
def update_homework_paragraph(request, pk):
    data = request.data

    paragraph = Presentation.objects.get(id=pk)
    paragraph.total_slides = data.get("total_slides")
    paragraph.save()

    serializer = HomeworkParagraphSerializer(paragraph, many=False)
    return Response(serializer.data)
