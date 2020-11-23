import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../components/products/products';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private _cartList: Products[] = [];
  cartList: BehaviorSubject<Products[]> =  new BehaviorSubject([]);

  constructor() { }

  addToCart(products: Products){
    const item: Products = this._cartList.find( v1 => v1.id === products.id )
    
    if(!item){
      this._cartList.push({... products});
    }
    else {
      item.cantidad += products.cantidad;
    }
    
    this.cartList.next(this._cartList);
  }

}
