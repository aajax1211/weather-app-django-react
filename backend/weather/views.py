import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializer import WeatherSerializer

class GetWeather(APIView):
    def get(self,request,city):
        api_key = "08853bbe6550b2464646d73e84640b50"
        url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
        response = requests.get(url)
        data = response.json()
        
        print(data)
        if data.get("cod") != "404":
            main_data = data.get("main")
            weather_data = {
                'city' : city,
                'temperature' : main_data.get('temp'),
                'humidity' : main_data.get('humidity'),
                'pressure' : main_data.get('pressure'),
                'description' : data['weather'][0]['description']
            }
            
            serialzer = WeatherSerializer(weather_data)
            return Response(serialzer.data)
        else:
            return Response({'error': 'City not found'}, status=status.HTTP_404_NOT_FOUND) 
        
        
