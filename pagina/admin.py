# from django.contrib import admin
# from .models import Producto


# admin.site.register(Producto)




from django.contrib import admin
from .models import Producto

admin.site.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ('id', 'marca', 'modelo', 'año', 'color', 'cantidad')  # columnas visibles
    search_fields = ('marca', 'modelo', 'color')  # barra de búsqueda
    list_filter = ('año', 'color')  # filtros a la derecha
