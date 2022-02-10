from django.core.mail import send_mail
from django.conf import settings
from django.db.models import QuerySet
from homework.models import HomeworkParagraph, Presentation, Student


def generate_homework(paragraph_query: QuerySet) -> str:
    task_list = []
    for idx, paragraph in enumerate(paragraph_query):
        task_list.append(f"{idx + 1}. {paragraph.task_text}")
    homework = "\n".join(task_list)
    return homework


def get_homework_paragraphs_by_id(presentation_id: int) -> HomeworkParagraph:
    presentation = Presentation.objects.get(id=presentation_id)

    homework_paragraphs = HomeworkParagraph.objects.filter(
        presentation=presentation
    ).order_by("slides_required")
    return homework_paragraphs


def get_homework_paragraphs_by_name(
    presentation_name: str, current_slide: int
) -> HomeworkParagraph:
    presentation = Presentation.objects.get(name=presentation_name)

    homework_paragraphs = HomeworkParagraph.objects.filter(
        presentation=presentation, slides_required__lte=current_slide
    ).order_by("slides_required")
    return homework_paragraphs


def add_homework_paragraph_(data: dict) -> HomeworkParagraph:
    presentation = Presentation.objects.get(id=data.get("presentation_id"))

    paragraph = HomeworkParagraph.objects.create(
        presentation=presentation,
        task_text=data.get("task_text", ""),
        slides_required=data.get("slides_required", 1),
    )
    return paragraph


def update_homework_paragraph_(pk: int, data: dict) -> HomeworkParagraph:
    paragraph = HomeworkParagraph.objects.get(id=pk)
    paragraph.slides_required = data.get("slides_required", 1)
    paragraph.task_text = data.get("task_text", "")
    paragraph.save()
    return paragraph
