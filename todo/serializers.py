from  rest_framework import serializers
from .models import MyTodo


class MyTodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyTodo
        fields = ('id','title', 'content', 'completed')