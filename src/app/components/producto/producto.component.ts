import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Products } from '../products/products';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  @Input() dato: Products;

  @Output() 
  agregoAlCarrito: EventEmitter<boolean> = new EventEmitter<boolean>();
  

  constructor(private productoServicio: ProductoService) { }

  ngOnInit(): void {
  }

  agregarCantidad(){
    if(this.dato.stock > 0){
      this.dato.cantidad++;
      this.dato.stock--;
    }
  }


  restarCantidad(){
    if(this.dato.cantidad > 0){
      this.dato.cantidad--;
      this.dato.stock++;
    }
  }

  agregarAlCarrito(){
    if(this.dato.cantidad > 0){
      this.productoServicio.addToCart(this.dato);
      this.dato.cantidad = 0;
      this.agregoAlCarrito.emit(true);
    }
  }


}
