from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import *

# Create your views here.

class AreaView(viewsets.ModelViewSet): #viewsets provides implementation for CRUD operations by default
    serializer_class = AreaSerializer
    queryset = Area.objects.all()

class RouteView(viewsets.ModelViewSet):
    serializer_class = RouteSerializer
    queryset = Route.objects.all()