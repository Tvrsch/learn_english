from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from homework.models import StudentProgress, Student, Presentation
from homework.serializers import StudentProgressSerializer
from homework.services.progress_services import (
    get_student_progress_,
    upsert_student_progress_,
    update_student_progress_,
)


@api_view(["GET"])
def get_student_progress(request):
    student_progress = get_student_progress_(request.query_params.get("student_id"))

    page = request.query_params.get("page")
    paginator = Paginator(student_progress, 4)

    try:
        student_progress = paginator.page(page)
    except PageNotAnInteger:
        student_progress = paginator.page(1)
    except EmptyPage:
        student_progress = paginator.page(paginator.num_pages)

    if not page:
        page = 1
    page = int(page)
    serializer = StudentProgressSerializer(student_progress, many=True)
    return Response(
        {"progress": serializer.data, "page": page, "pages": paginator.num_pages}
    )


@api_view(["POST"])
def add_student_progress(request):
    data = request.data
    progress = upsert_student_progress_(request.data)
    serializer = StudentProgressSerializer(progress, many=False)
    return Response(serializer.data)


@api_view(["PUT"])
def update_student_progress(request, pk):
    progress = update_student_progress_(request.data, pk)
    serializer = StudentProgressSerializer(progress, many=False)
    return Response(serializer.data)


@api_view(["DELETE"])
def delete_student_progress(request, pk):
    progress = StudentProgress.objects.get(id=pk)
    student = progress.student
    presentation = progress.presentation
    progress.delete()

    return Response(f"Progress of {student} on {presentation} was deleted")
