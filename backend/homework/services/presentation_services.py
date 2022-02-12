from django.core.mail import send_mail
from django.conf import settings
from django.db.models import QuerySet
from homework.models import HomeworkParagraph, Presentation, Student


def add_presentation_(data: dict) -> Presentation:
    name = data.get("name", "Sample Name")
    book = data.get("book", "Sample Book")
    diff_level = data.get("diff_level", "Unknown")
    total_slides = data.get("total_slides", 0)

    presentation = Presentation.objects.create(
        name=name,
        book=book,
        total_slides=total_slides,
        diff_level=diff_level,
    )
    return presentation


def update_presentation_(data: dict, pk: int) -> Presentation:
    presentation = Presentation.objects.get(id=pk)

    presentation.name = data.get("name")
    presentation.book = data.get("book")
    presentation.total_slides = data.get("total_slides")
    presentation.diff_level = data.get("diff_level")

    presentation.save()
    return presentation


def upload_image_(request) -> str:
    presentation_id = request.data["presentation_id"]
    presentation = Presentation.objects.get(id=presentation_id)

    presentation.picture = request.FILES.get("image")
    presentation.save()
    return "Image was uploaded"
