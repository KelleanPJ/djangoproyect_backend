# from django.urls import path
# from . import views

# urlpatterns = [
#   path ("", views.index),
  
# ]



from django.urls import path
from .views import (
    ProductoListView, ProductoDetailView,
    ProductoCreateView, ProductoUpdateView, ProductoDeleteView
)

app_name = 'pagina'

urlpatterns = [
    path('', ProductoListView.as_view(), name='producto_list'),
    path('create/', ProductoCreateView.as_view(), name='producto_create'),
    path('<int:pk>/', ProductoDetailView.as_view(), name='producto_detail'),
    path('<int:pk>/edit/', ProductoUpdateView.as_view(), name='producto_edit'),
    path('<int:pk>/delete/', ProductoDeleteView.as_view(), name='producto_delete'),
]
  