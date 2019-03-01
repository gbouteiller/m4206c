import { Component } from '@angular/core';
import { AuthService } from '~/auth/services/auth.service';

@Component({
  template: `
  `,
})
export class AppAuthenticatedHandler {
  constructor(readonly authService: AuthService) {}

  onTapSignout() {
    this.authService.signout();
  }
}
