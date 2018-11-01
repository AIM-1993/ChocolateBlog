from rest_framework import serializers
from backend.models import Todo, Article


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'thing', 'done')


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title', 'author', 'pub_date', 'context')
