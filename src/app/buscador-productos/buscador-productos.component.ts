import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador-productos',
  templateUrl: './buscador-productos.component.html',
  styleUrls: ['./buscador-productos.component.scss']
})
export class BuscadorProductosComponent implements OnInit {

  productos = [
    {
      nombre : 'Smartphone',
      precio : 12018.5,
      marca : 'LG',
      descripcion : 'Quadcore 3GHZ',
      existencia : 5,
      imagen : 'https://www.lg.com/au/images/smartphones/md05970977/gallery/G7_medium01.jpg'
    },
    {
      nombre : 'Smartwatch',
      precio : 4999.9,
      marca : 'Sony',
      descripcion : '3GB RAM',
      existencia : 0,
      imagen : 'https://intercompras.com/images/descriptions/123434_photo_8083_8882.jpg'
    },
    {
      nombre : 'SmartTV',
      precio : 8999.9,
      marca : 'Sony',
      descripcion : '52 pulgadas, conexión WIFI',
      existencia : 3,
      imagen : 'https://www.coppel.com/images/catalog/pm/2280993-1.jpg'
    }
  ];
  busqueda = '';
  resBusqueda = this.productos;
  existe = false;
  ordena = false;
  resalta = false;

  constructor() { }

  ngOnInit(): void {
  }

  buscar(): void {
    console.log(this.busqueda);
    this.resBusqueda = this.productos.filter((item) => {
      return item.nombre.toUpperCase().includes(this.busqueda.toLocaleUpperCase()) || 
      item.descripcion.toUpperCase().includes(this.busqueda.toLocaleUpperCase());
    });

    if (this.existe) {
      this.resBusqueda = this.resBusqueda.filter((item) => {
        if (item.existencia > 0) {
          return item;
        }
      });
    }

    if (this.ordena) {
      this.resBusqueda = this.resBusqueda.sort((p1, p2) => p2.precio - p1.precio);
    }
    console.log(this.resBusqueda);
  }

  existencia(): void {
    this.existe = !this.existe;
    this.buscar();
  }

  order(): void {
    this.ordena = !this.ordena;
    this.buscar();
  }

  resaltar(): void {
    this.resalta = !this.resalta;
  }
}
