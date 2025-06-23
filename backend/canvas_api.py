import os
from canvasapi import Canvas
from dotenv import load_dotenv

load_dotenv()

API_URL = os.getenv("CANVAS_API_URL")
API_KEY = os.getenv("CANVAS_API_KEY")

canvas = Canvas(API_URL, API_KEY)

def get_upcoming_assigments():
    user = canvas.get_user('self')
    assigments = []

    for course in user.get_courses(enrollment_state='active'):
        try:
            for a in course.get_assignments(order_by='due_at'):
                if a.due_at:
                    assigments.append({
                        "course": course.name,
                        "name": a.name,
                        "due_at": a.due_at
                    })
        except Exception:
            continue

    return assigments