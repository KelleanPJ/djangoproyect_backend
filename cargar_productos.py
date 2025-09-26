import os
import django

# Configurar Django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mysite.settings") #ESTO DEBES CAMBIARLO SEGUN EL NOMBRE DE TU CARPETA

django.setup()

from pagina.models import Producto

def cargar_producto():
    nombre = input("Nombre: ")
    marca = input("Marca: ")
    modelo = input("Modelo: ")
    descripcion = input("Descripción: ")
    categoria = input("Categoría: ")

    p = Producto.objects.create(
        nombre=nombre,
        marca=marca,
        modelo=modelo,
        descripcion=descripcion,
        categoria=categoria
    )
    print("✅ Producto guardado:", p)

if __name__ == "__main__":
    cargar_producto()
    
# Correr esta sintaxis en consola
# python cargar_productos.py