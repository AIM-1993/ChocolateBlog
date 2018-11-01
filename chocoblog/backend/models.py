from django.db import models

# Create your models here.
class Todo(models.Model):
    thing = models.CharField(max_length=50)
    done = models.BooleanField(default=False)

    def __str__(self):
        return self.thing

class Article(models.Model):
    title = models.CharField(max_length=30, verbose_name="文章名称")
    author = models.CharField(max_length=30, verbose_name="作者")
    pub_date = models.DateTimeField(verbose_name="发布时间")
    context = models.TextField(max_length=256, verbose_name="文章内容")

    def __str__(self):
        return f"{self.title}"
