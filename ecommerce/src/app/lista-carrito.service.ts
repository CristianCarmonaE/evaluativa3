import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaCarritoService {

  productosCarrito: any = [];
  productosCantidad= [{
      codigo: 0,
      cant: 0,
    }
  ];
  totalCarrito: number = 0;


  constructor() { }
}
