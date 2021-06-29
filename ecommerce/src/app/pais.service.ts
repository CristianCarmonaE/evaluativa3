import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  paises: any = [
    'Chile', 'Argentina', 'Venezuela', 'Perú'
  ];

  regionesChile: any = [
    'Región de Tarapacá', 'Región de Antofagasta', 'Región de Atacama', 'Región de Coquimbo',
  'Región de Valparaíso', 'Región del Libertador General Bernardo O’Higgins', 'Región del Maule',
  'Región del Biobío', 'Región de La Araucanía', 'Región de Los Lagos', 'Región Aysén del General Carlos Ibáñez del Campo',
  'Región de Magallanes y Antártica Chilena', 'Región Metropolitana de Santiago', 'Región de Los Ríos', 'Región de Arica y Parinacota',
  'Región de Ñuble'
  ];

  regionesArgentina: any = [
    'Llanura pampeana', 'Llanura Chaqueña', 'Mesopotamia', 'Sierras Pampeanas', 'Noroeste', 'Cuyo', 'Meseta Patagónica '
  ];

  regionesVenezuela: any = [
    'Región de la Cordillera Central', 'Región de la Cordillera Oriental', 'El Sistema Coriano', 'Región del Lago de Maracaibo', 
    'Región de los Andes', 'Región Insular', 'Región de los Llanos', 'Región de Guayana', 'Región Sistema Deltaico'
  ];
  regionesPeru: any = [
    'Región Chala', 'Región Yunga', 'Región Quechua', 'Región Suni', 'Región Puna', 'Región Janca', 'Región Selva Alta', 'Región Selva Baja'
  ];



  constructor() { }
}
