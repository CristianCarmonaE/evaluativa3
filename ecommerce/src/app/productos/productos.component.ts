import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListaCarritoService } from '../lista-carrito.service';
import { ListaProductosService } from '../lista-productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {


  clave = new FormControl(''); //Tags ingresados por el usuario en buscador
  cantidad = new FormControl();
  
  totalLength : any;
  currentPg: number = 1; // Argumento actual de la paginación
  totalCarrito !: number ; // Variable para guardar el total del carrito
  productosCantidad : any[] = []; // Objeto con la cantidad de cada producto en el carrito
  productosCarrito: any[] = []; // Objeto para guardar los productos en el carrito
  productosActual: any = []; // Objeto con los productos disponibles en la tienda
  productosBusqueda: any = []; // Objeto con los productos encontrados a través del filtro de búsqueda
  palabrasBusqueda: any = []; // Objeto para guardar las palabras de la búsqueda del usuario.

  constructor(private listaProductos: ListaProductosService, private listaCarrito: ListaCarritoService){

  }

  ngOnInit(){
    this.productosActual = this.listaProductos.listaProductos();
    this.productosCarrito = this.listaCarrito.productosCarrito;
    this.productosCantidad = this.listaCarrito.productosCantidad;
    this.totalCarrito = this.listaCarrito.totalCarrito;
  }
  
  agregarProducto(id: number){
   
    //Comprobar si el producto ya existe en el carrito de compra
    for(let i = 0; i< this.productosCarrito.length; i++){
      if(this.productosCarrito[i].codigo === this.productosActual[id].codigo){
        for(let j = 0;j<this.productosCantidad.length;j++){
          if(this.productosActual[id].codigo == this.productosCantidad[j].codigo){
            this.productosCantidad[j].cant+=1;
          }
        }
        this.totalCarrito+=this.productosActual[id].precio;
        this.listaCarrito.totalCarrito = this.totalCarrito;
        this.listaCarrito.productosCantidad = this.productosCantidad;
        return;
      }
    }

    //Si el producto no existe en el carrito se agrega
    this.productosCarrito.push(this.productosActual[id]);
    this.productosCantidad.push({codigo: this.productosActual[id].codigo, cant: 1});
    this.totalCarrito+=this.productosActual[id].precio;

    //Guardamos datos en el service
    this.listaCarrito.productosCarrito = this.productosCarrito;
    this.listaCarrito.productosCantidad = this.productosCantidad;
    this.listaCarrito.totalCarrito = this.totalCarrito;

  }

  eliminarProducto(cod: any){
    for(let i = 0;i<this.productosCarrito.length;i++){
      if(this.productosCarrito[i].codigo == cod){
        this.totalCarrito -= (this.productosCarrito[i].precio*this.productosCantidad[i+1].cant);
        this.productosCarrito.splice(i,1);
        this.productosCantidad.splice(i+1,1);
      }
    }

    //Guardamos datos en el service
    this.listaCarrito.productosCarrito = this.productosCarrito;
    this.listaCarrito.productosCantidad = this.productosCantidad;
    this.listaCarrito.totalCarrito = this.totalCarrito;
  }

  actualizarProducto(cod: any){
    if(this.cantidad.value == null){
      return;
    }

    for(let i = 0;i<this.productosCarrito.length;i++){
      if(this.productosCarrito[i].codigo == cod){
        this.totalCarrito-=(this.productosCarrito[i].precio*this.productosCantidad[i+1].cant);
        this.productosCantidad[i+1].cant = this.cantidad.value;
        this.totalCarrito+=(this.productosCarrito[i].precio*this.productosCantidad[i+1].cant);
      }
    }

    //Guardamos datos en el service
    this.listaCarrito.totalCarrito = this.totalCarrito;
    this.listaCarrito.productosCantidad = this.productosCantidad;
  }
  
  busquedaClave(){

    if(this.clave.value === ""){
      return;
    }
    //Verificar si ya existe la búsqueda
    for(let i= 0; i<this.palabrasBusqueda.length; i++){
      if(this.palabrasBusqueda[i] === this.clave.value){
        return;
      }
    }
    //Agregar elementos encontrados
    for(let i=0;i<this.productosActual.length;i++){
      if(this.productosActual[i].tags.search(this.clave.value) == -1){
      }
      else{
        if(!this.productosBusqueda.includes(this.productosActual[i])){
          this.productosBusqueda.push(this.productosActual[i]);
        }
      }
    }  
    this.palabrasBusqueda.push(this.clave.value);
    this.currentPg = 1;
    this.clave.setValue("");
  }

  quitarBusqueda(){
    this.productosBusqueda = [];
    this.palabrasBusqueda = [];
    this.clave.setValue("");
  }

}
