from rest_framework.decorators import api_view
from rest_framework.response import Response
from homework.models import HomeworkParagraph, Presentation
from homework.serializers import HomeworkParagraphSerializer


@api_view(["GET"])
def get_homework_paragraphs(request):
    presentation_id = request.query_params.get("presentation_id")
    presentation = Presentation.objects.get(id=presentation_id)

    homework_paragraphs = HomeworkParagraph.objects.filter(
        presentation=presentation
    )

    serializer = HomeworkParagraphSerializer(homework_paragraphs, many=True)
    return Response(serializer.data)


@api_view(["POST"])
def add_homework_paragraph(request):
    presentation = Presentation.objects.get(id=request.data.get("presentation_id"))
    paragraph = HomeworkParagraph.objects.create(
        presentation=presentation,
        task_text=request.data.get("task_text", ""),
        slides_required=request.data.get("slides_required", 1),
    )
    serializer = HomeworkParagraphSerializer(paragraph, many=False)
    return Response(serializer.data)


@api_view(["PUT"])
def update_homework_paragraph(request, pk):
    data = request.data

    paragraph = HomeworkParagraph.objects.get(id=pk)
    paragraph.slides_required = data.get("slides_required", 1)
    paragraph.task_text = data.get("task_text", "")
    paragraph.save()

    serializer = HomeworkParagraphSerializer(paragraph, many=False)
    return Response(serializer.data)

@api_view(["DELETE"])
def delete_homework(request, pk):
    homework = HomeworkParagraph.objects.get(id=pk)
    homework.delete()

    return Response("Homework Deleted")