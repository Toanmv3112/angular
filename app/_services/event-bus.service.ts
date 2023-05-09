import { Injectable } from '@angular/core';
import { Subject, Subscription, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  subject = new Subject<any>();
  constructor() {}
  on(event: Events, action: any): Subscription {
    return this.subject
      .pipe(
        filter((e: EmitEvent) => {
          return e.name === event;
        }),
        map((e: EmitEvent) => {
          return e.value;
        })
      )
      .subscribe(action);
  }
  emit(event: EmitEvent) {
    this.subject.next(event);
  }
}
export class EmitEvent {
  constructor(public name: any, public value?: any) {}
}
// this works like a communication channel
export enum Events {
  toggleLoadingOverlay,
}
