from django.shortcuts import render
from rest_framework import viewsets
from .serializers import AreaSerializer
from .models import Area

# Create your views here.

class AreaViewSet(viewsets.ModelViewSet): #viewsets provides implementation for CRUD operations by default
    queryset = Area.objects.all()
    serializer_class = AreaSerializer
