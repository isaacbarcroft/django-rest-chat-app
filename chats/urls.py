from django.urls import path
from . import views

app_name = 'chats'


urlpatterns = [ 
    path('<int:room>/messages/<int:pk>/', views.MessageDetailAPIView.as_view(), name="message_detail"),
    path('<int:room>/messages/', views.MessageListAPIView.as_view(), name="message_list"),
    path('<int:pk>/', views.RoomDetailAPIView.as_view(), name="room_detail"),
    path('', views.RoomListAPIView.as_view(), name='room_list'),
    path('messages/', views.MessageListAPIView.as_view(), name="message"),
    
]