from django.db import models

# Create your models here.

class Producto(models.Model):
  marca = models.CharField(max_length=50)
  modelo = models.CharField(max_length=50)
  año = models.IntegerField()
  color = models.CharField(max_length=50)
  cantidad = models.IntegerField()
  
  def __str__(self):
    return self.marca
  

