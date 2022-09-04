from django.shortcuts import render
from .models import MyTodo
from .serializers import MyTodoSerializer
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination


# Create your views here.

class MyTodoViewSet(viewsets.ModelViewSet):
    queryset = MyTodo.objects.all()
    serializer_class = MyTodoSerializer
    pagination_class = PageNumberPagination
    
