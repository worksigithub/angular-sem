import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoService } from 'src/app/services/producto.service';
import { Products } from '../products/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  datosCarrito$ : Observable<Products[]>;

  constructor(private productoServicio: ProductoService ) { 
    this.datosCarrito$ = this.productoServicio.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
