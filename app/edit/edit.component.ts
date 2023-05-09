import { Component } from '@angular/core';
import { CategoryServiceService } from '../_services/category-service.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { EmitEvent, EventBusService, Events } from '../_services/event-bus.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {
  public id: string = '';
  public editState ={
    error:false,
    success:false
  }

  constructor(
    private categoryService: CategoryServiceService,
    private _fb: FormBuilder,
    private route: ActivatedRoute, 
    private eventBusService: EventBusService
  ) {
    this.getCategory();
  }
  categoryEditForm = this._fb.group({
    name: [''],
    slug: [''],
  });
  onSubmit() {
    this.eventBusService.emit(new EmitEvent(Events.toggleLoadingOverlay,true));
    this.categoryService.update(parseInt(this.id), this.categoryEditForm.value).subscribe(res=>{
        this.editState = {
          ...this.editState,
          success:true
        }
        this.eventBusService.emit(new EmitEvent(Events.toggleLoadingOverlay,false));
    },error=>{
      this.editState = {
        ...this.editState,
        error:true
      }
      this.eventBusService.emit(new EmitEvent(Events.toggleLoadingOverlay,false));
    })
  }
  getCategory() {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.categoryService
      .getCategory(parseInt(this.id))
      .subscribe((res: any) => {
        this.categoryEditForm.setValue({
          name: res.name ?? '',
          slug: res.slug ?? '',
        });
      });
  }
}
