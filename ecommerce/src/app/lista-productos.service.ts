import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaProductosService {

  constructor() { }
  nombre = "hola desde service";

  listaProductos(){
    return[
      {
        codigo: 110,
        nombre: 'Guitarra clásica Vizcaya ARCG34 3/4 - color BB',
        precio: 39990,
        descripcion: 'La ARCG34 es una guitarra acústica clásica, tamaño 3/4 con cuerdas de nylon. Ideal, por su tamaño, para aquellos que están comenzando a estudiar este instrumento, especialmente niños y adolescentes.',
        img: '../../assets/img/guitarra-vizcaya.jpg',
        tags : "guitarra,,vizcaya, cuerda",
        fichaTecnica: [
          {
            color: "BB",
            materialCuerpo: "Basswood",
            materialFinger: "Palorosa",
            materialNeck: "Basswood",
            trastes: 19
          }
        ]
      },
      {
        codigo: 111,
        nombre: 'Guitarra electroacústica Epiphone EJ-200SCE color Black',
        precio: 449900,
        descripcion: 'El EJ-200SCE reinventa la histórica guitarra acústica J-200 Jumbo que ahora cuenta con una tapa de pícea(spruce) maciza, cabezas de máquina Grover® Rotomatic™ y el nuevo y revolucionario sistema de captación estéreo Shadow® eSonic-II HD™ que mantiene su verdadero tono acústico cuando enchufado a un amplificador o sistema de megafonía.',
        img: '../../assets/img/guitarra-epiphone.jpg',
        tags : "guitarra,, epiphone, cuerda",
        fichaTecnica: [
          {
            color: "Black",
            materialCuerpo: "Maple",
            materialFinger: "Paul Ferro",
            materialNeck: "Maple",
            trastes: 20
          }
        ]
      },
      {
        codigo: 112,
        nombre: 'Guitarra eléctrica Ltd EC256 DBSB',
        precio: 369900,
        descripcion: 'El EC-256FM es la evidencia perfecta de que una gran guitarra no tiene que ser prohibitivamente cara. Una forma clásica que es excelente para todos los estilos y géneros musicales, el EC-256FM ofrece características que normalmente se asocian con guitarras de gama alta, como una tapa de arce flameada, que se unen al cuerpo, el cuello y el cabezal, y una construcción de cuello alto para Acceso rápido y fácil a los trastes más altos.',
        img: '../../assets/img/guitarra-ltd.jpg',
        tags : "guitarra, ltd, cuerda",
        fichaTecnica: [
          {
            color: "Dark brown sunburst",
            materialCuerpo: "Caoba/Arce",
            materialFinger: "Jatoba",
            materialNeck: "Caoba",
            trastes: 22
          }
        ]
      },
      {
        codigo: 113,
        nombre: 'Guitarra electroacústica Takamine GC1CE - con cutaway - color natural (NAT)',
        precio: 262900,
        descripcion: 'Una opción excelente para cualquier guitarrista que busque una guitarra electroacústica asequible que funcione muy por encima de su precio, el GC1CE presenta una selecta tapa de abeto y una parte posterior y laterales de caoba para un sonido completo y equilibrado.',
        img: '../../assets/img/guitarra-takamine.jpg',
        tags : "guitarra, takamine, cuerda",
        fichaTecnica: [
          {
            color: "Natural",
            materialCuerpo: "Caoba",
            materialFinger: "Palorosa",
            materialNeck: "Spruce",
            trastes: 19
          }
        ]
      },
      {
        codigo: 114,
        nombre: 'Guitarra eléctrica Ibanez AS93FM TCD - Transparent Cherry Red',
        precio: 499900,
        descripcion: 'La guitarra eléctrica Ibanez AS93 Artcore Expressionist semi-hollowbody te brinda un tono grueso y con detalle, por lo que es una excelente opción para casi cualquier género musical.',
        img: '../../assets/img/guitarra-ibanez.jpg',
        tags : "guitarra, ibanez, cuerda",
        fichaTecnica: [
          {
            color: "Transparent Cherry Red",
            materialCuerpo: "Arce Flameado",
            materialFinger: "Ébano",
            materialNeck: "Nyatoh/Arce 3 piezas",
            trastes: 22
          }
        ]
      },
      {
        codigo: 115,
        nombre: 'Guitarra eléctrica Epiphone SG Classic Worn P90s',
        precio: 369900,
        descripcion: 'La forma distintiva del cuerpo SG se destaca por un impresionante acabado de grano abierto "desgastado" que es tan rico visualmente como la guitarra es rica en sonido. Al igual que los SG originales, el Classic Worn presenta un cuerpo completamente de caoba que infunde profundidad y calidez al tono de la guitarra. ',
        img: '../../assets/img/guitarra-epiphone2.jpg',
        tags : "guitarra, epiphone, cuerda",
        fichaTecnica: [
          {
            color: "Worn Satin Cherry",
            materialCuerpo: "Caoba",
            materialFinger: "Indian Laurel",
            materialNeck: "Caoba",
            trastes: 22
          }
        ]
      },
      {
        codigo: 116,
        nombre: 'Guitarra eléctrica Tokai LSS230 SYW',
        precio: 1599900,
        descripcion: 'La Tokai LSS230 SYW es un homenaje a uno de los diseños de guitarra más venerados de todos los tiempos: La Famosa Les Paul. Combinando características que los guitarristas adoraron desde el inicio de las guitarras con refinamientos de años posteriores de producción, el LSS230 es el sueño de todos los amantes de LP hecho realidad.',
        img: '../../assets/img/guitarra-tokai.jpg',
        tags : "guitarra, tokai, cuerda",
        fichaTecnica: [
          {
            color: "See-through yellow",
            materialCuerpo: "Caoba de Honduras",
            materialFinger: "Palorosa de la india",
            materialNeck: "Caoba de Honduras",
            trastes: 22
          }
        ]
      },
      {
        codigo: 117,
        nombre: 'Guitarra eléctrica Ltd M200 FM STBLK',
        precio: 389900,
        descripcion: 'Con la M-200, los guitarristas que están listos para triturar con una alta calidad. El clásico cuerpo plano de losa de la serie M se ofrece aquí en caoba, con mástil de arce y diapasón de jatoba tostado con 24 trastes extra-jumbo.',
        img: '../../assets/img/guitarra-ltd2.jpg',
        tags : "guitarra, ltd, cuerda",
        fichaTecnica: [
          {
            color: "See-through yellow",
            materialCuerpo: "Caoba de Honduras",
            materialFinger: "Palorosa de la india",
            materialNeck: "Caoba de Honduras",
            trastes: 24
          }
        ]
      },
      {
        codigo: 118,
        nombre: 'Guitarra eléctrica Ltd MH203 QM STB STBL',
        precio: 399900,
        descripcion: 'El MH-203QM ofrece la parte superior arqueada del ESP Horizon con los elementos de diseño agresivos de la Serie M, todo ello envuelto en un instrumento económico de alta calidad, y agrega una cubierta de arce acolchada en acabado See Thru Blue.',
        img: '../../assets/img/guitarra-ltd3.jpg',
        tags : "guitarra, ltd, cuerda",
        fichaTecnica: [
          {
            color: "See-through yellow",
            materialCuerpo: "Caoba de Honduras",
            materialFinger: "Palorosa de la india",
            materialNeck: "Caoba de Honduras",
            trastes: 22
          }
        ]
      },
      {
        codigo: 119,
        nombre: 'Guitarra eléctrica Ibanez AZ2204B color Black (BK)',
        precio: 1699900,
        descripcion: 'El AZ2204B presenta un cuerpo de aliso atornillado a un mástil ovalado en forma de C de arce tostado S-Tech con un diapasón de arce tostado S-Tech con 22 trastes de acero inoxidable, marcadores de posición de puntos negros y puntos laterales luminiscentes.',
        img: '../../assets/img/guitarra-ibanez2.jpg',
        tags : "guitarra, ibanez, cuerda",
        fichaTecnica: [
          {
            color: "See-through yellow",
            materialCuerpo: "Caoba de Honduras",
            materialFinger: "Palorosa de la india",
            materialNeck: "Caoba de Honduras",
            trastes: 22
          }
        ]
      },
      {
        codigo: 120,
        nombre: 'Piano digital Alesis Recital PRO - 88 teclas',
        precio: 1599900,
        descripcion: 'Puede personalizar fácilmente las voces combinando dos a la vez para obtener un tono rico y completo utilizando los controles intuitivos integrados y la pantalla de visualización. Las voces también se pueden asignar solo a la mano izquierda o derecha en el modo Split. Incluso puede agregar modulación ajustable, reverberación y chorus para adaptar aún más su sonido.',
        img: '../../assets/img/piano-alesis.jpg',
        tags : "piano, alesis, digital",
        fichaTecnica: [
          {
            color: "See-through yellow",
            materialCuerpo: "Caoba de Honduras",
            materialFinger: "Palorosa de la india",
            materialNeck: "Caoba de Honduras",
            trastes: 22
          }
        ]
      },
      {
        codigo: 121,
        nombre: 'Piano digital Kawai CN29 de color negro',
        precio: 1999900,
        descripcion: 'Con la acción del teclado Responsive Hammer III con contrapesos de 88 teclas, impresionantes sonidos de piano de cola de concierto SK-EX y EX, y un sistema de entrega desarrollado por los especialistas en audio Onkyo, el CN29 enfocado en el piano ofrece el mejor toque y tono de su clase, conectividad y funciones integradas de lección y grabadora dentro de un gabinete compacto y elegante.',
        img: '../../assets/img/piano-kawai.jpg',
        tags : "piano, kawai, digital",
        fichaTecnica: [
          {
            color: "See-through yellow",
            materialCuerpo: "Caoba de Honduras",
            materialFinger: "Palorosa de la india",
            materialNeck: "Caoba de Honduras",
            trastes: 22
          }
        ]
      },
      {
        codigo: 122,
        nombre: 'Piano de cola Young Chang W150',
        precio: 6799900,
        descripcion: 'Los pianos Young Chang utilizan una escala de tensión más baja junto con los martillos prensados en frío para darles un tono cálido y rico. La caja de resonancia flotante y el puente de graves de acoplamiento directo mejoran la respuesta de graves incluso en los graves más pequeños.',
        img: '../../assets/img/piano-young.jpg',
        tags : "piano, young, chang, cola",
        fichaTecnica: [
          {
            color: "See-through yellow",
            materialCuerpo: "Caoba de Honduras",
            materialFinger: "Palorosa de la india",
            materialNeck: "Caoba de Honduras",
            trastes: 22
          }
        ]
      },
      {
        codigo: 123,
        nombre: 'Teclado personal Casio CT-X800',
        precio: 6799900,
        descripcion: 'Es capaz de reproducir el sonido característico de los instrumentos acústicos de una forma extraordinaria. Una característica muy especial es el comportamiento sonoro natural de instrumentos acústicos, como pianos, instrumentos de arco, instrumentos de viento y tambores.',
        img: '../../assets/img/teclado-casio.jpg',
        tags : "piano, casio, teclado, digital",
        fichaTecnica: [
          {
            color: "See-through yellow",
            materialCuerpo: "Caoba de Honduras",
            materialFinger: "Palorosa de la india",
            materialNeck: "Caoba de Honduras",
            trastes: 22
          }
        ]
      }
    ]

  }
}
