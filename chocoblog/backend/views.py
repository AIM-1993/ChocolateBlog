from rest_framework import viewsets
from backend.serializers import DataIndexSerializer, ArticleSerializer
from .models import DataIndex, Article

# Create your views here.


class DataIndexViewSet(viewsets.ModelViewSet):

    queryset = DataIndex.objects.all().order_by('-pk')
    serializer_class = DataIndexSerializer


class ArticleViewSet(viewsets.ModelViewSet):

    queryset = Article.objects.all().order_by('-pub_date')
    serializer_class = ArticleSerializer
