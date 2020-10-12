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
      descripcion: "Detergente Limon",
      urlImage: "../../assets/images/p1.jpg",
      marca: "Magistral",
      oferta: true,
      precio: 79.00
    },
    {
      id: 2,
      cantidad: 1,
      descripcion: "Dulde de leche",
      urlImage: "../../assets/images/p2.jpg",
      marca: "LuzAzul",
      oferta: false,
      precio: 150.00
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
