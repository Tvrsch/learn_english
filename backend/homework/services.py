from django.core.mail import send_mail
from django.conf import settings


def generate_homework(paragraph_query):
    task_list = []
    for idx, paragraph in enumerate(paragraph_query):
        task_list.append(f"{idx + 1}. {paragraph.task_text}")
    homework = "\n".join(task_list)
    return homework
