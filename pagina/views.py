# from django.shortcuts import render
# from .models import Producto

# # Create your views here.



# def index(request):
#     productos = Producto.objects.all()  # Trae todos los productos de la BD
#     return render(request, "index.html", {"productos": productos})



from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import Producto
from .forms import ProductoForm

class ProductoListView(ListView):
    model = Producto
    template_name = 'pagina/producto_list.html'
    context_object_name = 'productos'

class ProductoDetailView(DetailView):
    model = Producto
    template_name = 'pagina/producto_detail.html'
    context_object_name = 'producto'

class ProductoCreateView(CreateView):
    model = Producto
    form_class = ProductoForm
    template_name = 'pagina/producto_form.html'
    success_url = reverse_lazy('pagina:producto_list')

class ProductoUpdateView(UpdateView):
    model = Producto
    form_class = ProductoForm
    template_name = 'pagina/producto_form.html'
    success_url = reverse_lazy('pagina:producto_list')

class ProductoDeleteView(DeleteView):
    model = Producto
    template_name = 'pagina/producto_confirm_delete.html'
    success_url = reverse_lazy('pagina:producto_list')
