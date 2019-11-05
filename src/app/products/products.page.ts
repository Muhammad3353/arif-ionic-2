import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EverythingProductService } from '../everything-product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products =  [];
  constructor(
    private router: Router,
    private everyting: EverythingProductService
    ) {}
  changeurl(product) {
    const name = product.name;
    const url = `products/${name}`;

    this.router.navigateByUrl(url);
  }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.products = this.everyting.returnProducts();
  }

}
