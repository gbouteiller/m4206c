import { Component, ViewChild } from '@angular/core';

import { AuthSignin } from '../models';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'auth-signin',
  template: ``,
})
export class AuthSigninComponent {
  loading = false;

  constructor(readonly authService: AuthService) {}

  onSubmit() {
    this.loading = true;
  }
}
