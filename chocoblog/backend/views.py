import json
from django.shortcuts import render

# Create your views here.
def render_html(request):
    list = ['view']
    return render(request, 'index.html', {'List': list})
