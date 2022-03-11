from pydoc import describe
from django.db import models

# Create your models here.
class area(models.Model):
    name = models.CharField(max_length=20)
    mapYLocation = models.IntegerField()
    mapXLocation = models.IntegerField()
    
class route(models.Model):
    grade = models.CharField(max_length=5)
    color = models.CharField(max_length=20)
    area = models.ForeignKey(area, null=True, on_delete=models.SET_NULL)
    description = models.CharField(max_length=200)
    setter = models.CharField(max_length=20)