import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EverythingProductService } from '../everything-product.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  addForm: FormGroup;
  singleProduct;

  constructor(
    private router: Router,
    private everythingProdut: EverythingProductService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formInitializer();
  }
  formInitializer() {
    this.addForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      id: [null, [Validators.required]]
    });
  }

  async addNewProduct(){
    this.singleProduct = this.addForm.value;
    this.everythingProdut.addNewProduct(this.singleProduct.name, this.singleProduct.id);
    this.router.navigateByUrl('/products');
  }
}
