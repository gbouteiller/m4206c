import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanLoad {
  constructor(readonly authService: AuthService) {}

  checkAuth = (): boolean => {
    if (this.authService.isAuthenticated) return true;
    this.authService.redirectToAuthentication();
    return false;
  };

  canActivate = this.checkAuth;
  canLoad = this.checkAuth;
}
