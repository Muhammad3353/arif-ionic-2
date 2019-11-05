import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EverythingProductService {
  products = [
    {name: 'Sunsilk', id: '1'},
    {name: 'Pantene', id: '2'},
    {name: 'Olper', id: '3'},
    {name: 'Milkpak', id: '4'}
  ];

  constructor() { }

  returnProducts(){
    return this.products;
  }
  deleteProduct(name) {
    this.products = this.products.filter(e => {
      return e.name !== name;
    });
  }
  addNewProduct(name,id){
    this.products.push({name,id});
  }
}
