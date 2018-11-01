from django.urls import path, re_path, include
from rest_framework import routers
from .import views


router = routers.DefaultRouter()
router.register(r'api/todo', views.TodoViewSet)

app_name = 'backend'
urlpatterns = [
    re_path(r'^', include(router.urls)),
    re_path(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
