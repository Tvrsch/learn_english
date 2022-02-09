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


def generate_homework(paragraph_query):
    task_list = []
    for idx, paragraph in enumerate(paragraph_query):
        task_list.append(f"{idx + 1}. {paragraph.task_text}")
    homework = "\n".join(task_list)
    return homework


@api_view(["GET"])
def get_generated_homework(request):
    presentation_name = request.query_params.get("presentation_name")
    print(presentation_name)
    current_slide = request.query_params.get("current_slide")
    presentation = Presentation.objects.get(name=presentation_name)

    homework_paragraphs = HomeworkParagraph.objects.filter(
        presentation=presentation, slides_required__lte=current_slide
    )

    homework = generate_homework(homework_paragraphs)
    print(homework)
    return Response({"homework": homework})