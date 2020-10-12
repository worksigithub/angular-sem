import { Component, OnInit } from '@angular/core';
import { Products } from '../products/products';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  datos : Products []  = [
    {
      id: 1,
      cantidad: 1,
      descripcion: "Leche entera",
      urlImage: "https://share.worksiweb.com.ar/article-image/7790742448002",
      marca: "La Serenisima",
      oferta: true,
      precio: 78.00
    },
    {
      id: 2,
      cantidad: 1,
      descripcion: "Leche descremada",
      urlImage: "https://share.worksiweb.com.ar/article-image/7790742034502",
      marca: "La Serenisima",
      oferta: false,
      precio: 71.00
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
