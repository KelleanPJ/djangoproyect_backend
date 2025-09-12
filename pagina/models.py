from django.db import models

# Create your models here.

class Producto(models.Model):
  nombre = models.CharField(max_length=175)
  marca = models.CharField(max_length=175)
  modelo = models.CharField(max_length=200)
  descripcion = models.CharField(max_length=200)
  categoria = models.CharField(max_length=175)
  
  def __str__(self):
    return self.nombre
  
