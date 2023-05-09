import { Component, OnInit } from '@angular/core';
import { EventBusService } from './_services/event-bus.service';
import { Events } from './_services/event-bus.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'b2c';
  public showLoadingOverlay:boolean = false;
  private _subscribeToToggleLoadingOverlay:any;


  constructor(private eventBusService: EventBusService) {} 

  ngOnInit(){
    this._subscribeToToggleLoadingOverlay=this.eventBusService.on(Events.toggleLoadingOverlay,(data:any)=>{
       this.showLoadingOverlay = data; 
    })
  }

  ngOnDestroy(){
      this._subscribeToToggleLoadingOverlay && this._subscribeToToggleLoadingOverlay.unsubscribe();
  }
}
