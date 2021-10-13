from django.shortcuts import render
from .models import Room, Message
from .serializers import RoomSerializer, MessageSerializer
from rest_framework import generics 
# Create your views here.


class RoomListAPIView(generics.ListCreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

class RoomDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

class MessageListAPIView(generics.ListCreateAPIView):
    serializer_class = MessageSerializer

    def get_queryset(self):
        room = self.kwargs['room']
        return Message.objects.filter(room=room)

class MessageDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

