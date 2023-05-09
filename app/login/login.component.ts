import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import {
  EmitEvent,
  EventBusService,
  Events,
} from '../_services/event-bus.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private _fb: FormBuilder,
    private eventBusService: EventBusService, 
    private router: Router
  ) {}
  errMessage = '';
  loginForm = this._fb.group({
    email: [''],
    password: [''],
  });
  onLogin() {
    this.eventBusService.emit(new EmitEvent(Events.toggleLoadingOverlay, true));

    this.authService.login(this.loginForm.value)
    .pipe(map((res:any) => (res = res.user)))
    .subscribe(res=>{
      const token = res.token;
      localStorage.setItem("TOKEN", token);
      this.router.navigateByUrl("/categories")
      this.eventBusService.emit(
              new EmitEvent(Events.toggleLoadingOverlay, false)
            );
    })
    

      
    //   },
    //   (error) => {
    //   console.log(error)
    //     this.errMessage = error.error.message;
    //     this.eventBusService.emit(
    //       new EmitEvent(Events.toggleLoadingOverlay, false)
    //     );
    //   }
    // );
  }
}
