from django.urls import path, include
from .views import GetWeather

urlpatterns = [
    path('weather/<str:city>/', GetWeather.as_view(), name ='get_weather'),
]
