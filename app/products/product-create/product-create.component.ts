import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {
  constructor(private productService: ProductService, 
    private _fb: FormBuilder) {}
    productCreateForm = this._fb.group({
      name: [''],
      price: [''],
      description:[''],
    })
  onSubmit() {
    console.table(this.productCreateForm.value);
    this.productService.create(this.productCreateForm.value).subscribe();
      this.productCreateForm.reset();
   
  }

}
