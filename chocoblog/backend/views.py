from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from backend.serializers import TodoSerializer
from .models import Todo

# Create your views here.

def index(request):
    return render(request, 'index.html')




class TodoViewSet(viewsets.ModelViewSet):

    queryset = Todo.objects.all().order_by('-pk')
    serializer_class = TodoSerializer
