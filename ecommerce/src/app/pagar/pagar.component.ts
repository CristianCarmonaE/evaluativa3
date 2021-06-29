import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ListaCarritoService } from '../lista-carrito.service';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.css']
})
export class PagarComponent implements OnInit {

  formularioPago !: FormGroup;
  productosCarrito: any = [];
  productosCantidad : any = [];
  totalCarrito !: number;
  regiones: any = [];
  paises: any = [];
  pagar: boolean = false;


  constructor(private formBuilder: FormBuilder, private listaCarrito: ListaCarritoService, private listaPais: PaisService){
    this.buildForm();
    this.productosCarrito = this.listaCarrito.productosCarrito;
    this.productosCantidad = this.listaCarrito.productosCantidad;
    this.totalCarrito = this.listaCarrito.totalCarrito;
    this.paises = this.listaPais.paises;
  }

  ngOnInit(): void {
  }

  private buildForm(){
    this.formularioPago = this.formBuilder.group({
      pais : ['', [Validators.required]],
      calle: ['', [Validators.required, Validators.maxLength(40)]],
      ciudad: ['', [Validators.required, Validators.maxLength(30)]],
      region: ['', [Validators.required]],
      nombreTarjeta: ['', [Validators.required]],
      numeroTarjeta: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern(/^[0-9]+$/)]],
      vencimiento: ['', [Validators.required]],
      cvc: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      codigoPostal: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    });
  }

  mostrarRegion(pais:string){
    console.log(this.formularioPago.value.vencimiento);
    //Mostrar región dependiendo de la eleccion del usuario
    switch(pais) {
      case ('Chile'):{
        this.regiones = this.listaPais.regionesChile;
        break;
      }
      case ('Argentina'):{
        this.regiones = this.listaPais.regionesArgentina;
        break;
      }
      case ('Venezuela'):{
        this.regiones = this.listaPais.regionesVenezuela;
        break;
      }
      case ('Perú'):{
        this.regiones = this.listaPais.regionesPeru;
        break;
      }
      default:
        this.regiones = [];
        break;
    }
  }

  clickPagar(){
    this.pagar = true;
  }

  get paisField(){
    return this.formularioPago.get('pais');
  }

  get regionField(){
    return this.formularioPago.get('region');
  }

  get ciudadField(){
    return this.formularioPago.get('ciudad');
  }

  get calleField(){
    return this.formularioPago.get('calle');
  }

  get nombreTarjetaField(){
    return this.formularioPago.get('nombreTarjeta');
  }

  get numeroTarjetaField(){
    return this.formularioPago.get('numeroTarjeta');
  }

  get codigoPostalField(){
    return this.formularioPago.get('codigoPostal');
  }

  get vencimientoField(){
    return this.formularioPago.get('vencimiento');
  }

  get cvcField(){
    return this.formularioPago.get('cvc');
  }

}
