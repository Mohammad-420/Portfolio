from django.shortcuts import render
from .models import *

# Create your views here.
def home(request):
    portfolioes = Portfolio.objects.all()
    skills = Skill.objects.all()
    
    context = {
        "portfolioes": portfolioes,
        "skills": skills
    }
    return render(request, template_name="base/home.html", context=context)