from rest_framework import serializers

class WeatherSerializer(serializers.Serializer):
    city = serializers.CharField(max_length=100)
    temperature = serializers.FloatField()
    humidity = serializers.ImageField()
    pressure = serializers.IntegerField()
    description = serializers.CharField(max_length=255)