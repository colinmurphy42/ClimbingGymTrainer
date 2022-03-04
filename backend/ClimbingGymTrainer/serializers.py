from rest_framework import serializers
from .models import route, area

class AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = area
        fields = ('id', 'name', 'value', 'mapYLocation', 'mapXLocation')

class RouteSerializer(serializers.ModelSerializer):
    class Meta:
        model = route
        fields = ('id', 'grade', 'area', 'color', 'description')
