from django.db import models

# Create your models here.
class DataIndex(models.Model):
    count = models.IntegerField(default=0, verbose_name="文章数量")

    def __str__(self):
        return f"{self.count}"

    class Meta:
        verbose_name = "文章存量"
        verbose_name_plural = verbose_name

class Article(models.Model):
    title = models.CharField(max_length=30, verbose_name="文章名称")
    author = models.CharField(max_length=30, verbose_name="作者")
    pub_date = models.DateTimeField(verbose_name="发布时间")
    context = models.TextField(max_length=256, verbose_name="文章内容")

    def __str__(self):
        return f"{self.title}"

    class Meta:
        verbose_name = "文章详情"
        verbose_name_plural = verbose_name
