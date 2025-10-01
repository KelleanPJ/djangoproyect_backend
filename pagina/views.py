from django.shortcuts import render
from .models import Producto

# Create your views here.

# def index(request):
#     return render(request, "index.html")


def index(request):
    productos = Producto.objects.all()  # Trae todos los productos de la BD
    return render(request, "index.html", {"productos": productos})