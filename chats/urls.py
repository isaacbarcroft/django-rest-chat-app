from django.urls import path
from . import views

app_name = 'chats'


urlpatterns = [ 
    path('<int:chat>/message/<int:pk>/', views.MessageDetailAPIView.as_view(), name="message_detail"),
    path('<int:chat>/message/', views.MessageListAPIView.as_view(), name="message_list"),
    path('<int:pk>/', views.RoomDetailAPIView.as_view(), name="room_detail"),
    path('', views.RoomListAPIView.as_view(), name='room_list'),
]