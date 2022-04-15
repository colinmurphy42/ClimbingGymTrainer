from rest_framework import serializers
from .models import Route, Area

class AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Area
        fields = ('id', 'name', 'mapYLocation', 'mapXLocation')

class RouteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Route
        fields = ('id', 'grade', 'area', 'color', 'description')
