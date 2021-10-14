from django.db import models
from django.conf import settings
# Create your models here.
class Room(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('-created_at', )

    def __str__(self):
        return self.name



class Message(models.Model):
    # user = models.CharField(max_length=255)
    body = models.TextField()
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,    
                           on_delete=models.CASCADE, null=True)
    def __str__(self):
        return self.room.name