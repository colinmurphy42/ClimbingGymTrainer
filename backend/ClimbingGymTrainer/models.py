from pydoc import describe
from django.db import models

# Create your models here.
class Area(models.Model):
    name = models.CharField(max_length=20)
    mapYLocation = models.IntegerField()
    mapXLocation = models.IntegerField()

    def __str__(self): #Makes it easier to read in admin view
        return self.name
    
class Route(models.Model):
    grade = models.CharField(max_length=5)
    color = models.CharField(max_length=20)
    area = models.ForeignKey(Area, null=True, on_delete=models.SET_NULL, related_name='routes')
    description = models.CharField(max_length=200)
    setter = models.CharField(max_length=20)