import { Component } from '@angular/core';
import { AuthService } from '~/auth/services/auth.service';

@Component({
  template: `
    <ActionBar title="" class="action-bar">
      <Image horizontalAlignment="left" src="~/images/logo-blanc.png" height="40"></Image>
      <ActionItem (tap)="onTapSignout()" class="action-item">
        <Button text="\uf011" width="60" borderWidth="1" borderColor="transparent" class="fas btn btn-accent" ></Button>
      </ActionItem>
    </ActionBar>
    <router-outlet></router-outlet>
  `,
})
export class AppAuthenticatedHandler {
  constructor(readonly authService: AuthService) {}

  onTapSignout() {
    this.authService.signout();
  }
}
