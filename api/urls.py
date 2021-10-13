from django.urls import path, include

app_name = 'api_v1'

urlpatterns = [ 
    path('chats/', include('chats.urls', namespace='chats'))
]