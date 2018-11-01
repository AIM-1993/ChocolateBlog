from rest_framework import serializers
from backend.models import DataIndex, Article


class DataIndexSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataIndex
        fields = ('id', 'count')


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title', 'author', 'pub_date', 'context')
