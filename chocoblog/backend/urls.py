from django.urls import re_path, include
from rest_framework import routers
from .import views


router = routers.DefaultRouter()
router.register(r'api/v1/DataIndex', views.DataIndexViewSet)
router.register(r'api/v1/article', views.ArticleViewSet)


urlpatterns = [
    re_path(r'^', include(router.urls)),
    re_path(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
