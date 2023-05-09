import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CategoryServiceService } from 'src/app/_services/category-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  // categoryCreateForm = new FormGroup({
  //   name: new FormControl(''),
  //   slug: new FormControl(''),
  // });
  constructor(private categoryService: CategoryServiceService, 
    private _fb: FormBuilder) {}
    categoryCreateForm = this._fb.group({
      name: [''],
      slug: ['']
    })
  onSubmit() {
    console.table(this.categoryCreateForm.value);
    this.categoryService.create(this.categoryCreateForm.value).subscribe();
      this.categoryCreateForm.reset();
   
  }
}
