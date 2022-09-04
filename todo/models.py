from django.db import models

# Create your models here.

class MyTodo(models.Model):
    title = models.CharField(max_length=255, blank=True)
    content = models.TextField()
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ('-created_at',)
        
    def __str__(self):
        return self.title
    
    
    