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
    descripcion: "Producto 1",
    urlImage: "../../assets/images/p1.jpg",
    precio: 10.00
  }

  constructor() { }

  ngOnInit(): void {
  }

}
