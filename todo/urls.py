from importlib.resources import path
from .views import MyTodoViewSet
from  rest_framework import routers
from django.urls import path, include



routers = routers.DefaultRouter()

routers.register('todos', MyTodoViewSet)

urlpatterns = [
    path('', include(routers.urls))
]