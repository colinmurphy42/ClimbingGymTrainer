from rest_framework import serializers
from .models import Route, Area

class RouteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Route
        fields = ('id', 'grade', 'area', 'color', 'description', 'setter')


class AreaSerializer(serializers.ModelSerializer):
    routes = RouteSerializer(many=True)
    class Meta:
        model = Area
        fields = ('id', 'name', 'mapYLocation', 'mapXLocation', 'routes')
