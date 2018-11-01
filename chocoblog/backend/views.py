from rest_framework import viewsets
from backend.serializers import TodoSerializer, ArticleSerializer
from .models import Todo, Article

# Create your views here.


class TodoViewSet(viewsets.ModelViewSet):

    queryset = Todo.objects.all().order_by('-pk')
    serializer_class = TodoSerializer


class ArticleViewSet(viewsets.ModelViewSet):

    queryset = Article.objects.all().order_by('-pub_date')
    serializer_class = ArticleSerializer
