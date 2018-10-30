from django.urls import path, re_path, include
from rest_framework import routers
from backend import views


router = routers.DefaultRouter()
router.register(r'todo', views.TodoViewSet)



urlpatterns = [
    re_path(r'^', include(router.urls)),
    re_path(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
