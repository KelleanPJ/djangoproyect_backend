import os
import django


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mysite.settings") 

django.setup()

from pagina.models import Producto

def cargar_producto():
    marca = input("Marca: ")
    modelo = input("Modelo: ")
    año = input("Año: ")
    color = input("Color: ")
    cantidad = input("Cantidad: ")

    p = Producto.objects.create(
        marca=marca,
        modelo=modelo,
        año=año,
        color=color,
        cantidad=cantidad
    )
    print("✅ Producto guardado:", p)

if __name__ == "__main__":
    cargar_producto()
    
# Correr esta sintaxis en consola
# python cargar_productos.py