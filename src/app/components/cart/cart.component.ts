import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  datosCarrito = {
    id: 1,
    cantidad: 2,
    descripcion: "Leche descremada",
    urlImage: "https://share.worksiweb.com.ar/article-image/7790742034502",
    precio: 71.00
  }

  constructor() { }

  ngOnInit(): void {
  }

}
