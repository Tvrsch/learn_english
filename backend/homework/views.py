from django.http import JsonResponse


def get_routes(request):
    return JsonResponse('Hello', safe=False)