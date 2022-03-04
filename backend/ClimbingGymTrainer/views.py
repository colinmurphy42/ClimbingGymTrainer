from django.shortcuts import render
from rest_framework import viewsets
from .serializers import AreaSerializer
from .models import area

# Create your views here.

class AreaView(viewsets.ModelViewSet): #viewsets provides implementation for CRUD operations by default
    serializer_class = AreaSerializer
    queryset = area.objects.all()
