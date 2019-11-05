import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { EverythingProductService } from '../everything-product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private everythingService: EverythingProductService
  ) { }

  products = [];

  singleProduct;

  ngOnInit() {
    this.products = this.everythingService.returnProducts();

    this.route.paramMap.subscribe(paramMap => {
      const val = paramMap.get('productname');

      this.singleProduct = this.products.find(obj => {
        return obj.name.includes(val);
      });
    });
  }

  async deleteProduct() {
    const alert = await this.alertController.create({
      header: 'Alert',

      message: `Are you sure you watn to remove ${this.singleProduct.name}?`,
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Okay',
          handler: () => {
            this.everythingService.deleteProduct(this.singleProduct.name);
            this.router.navigateByUrl('/products');
          }
        }
      ]
    });

    alert.present();
  }
}
