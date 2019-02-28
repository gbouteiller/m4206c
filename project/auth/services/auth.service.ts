import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { getString, remove, setString } from 'tns-core-modules/application-settings';

import { AuthSignin, AuthSigninResponse } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly authenticatedURL = '/';
  readonly authenticationURL = '/connexion';
  readonly tokenKey = 'authToken';

  get isAuthenticated(): boolean {
    return !!getString(this.tokenKey);
  }

  constructor(readonly http: HttpClient, readonly router: RouterExtensions) {}

  redirectToAuthentication = () => this._redirectTo(this.authenticationURL);

  signin(data: AuthSignin): Observable<any> {
    return this.http.post<AuthSigninResponse>('login', data).pipe(
      tap(({ token }) => this._registerToken(token)),
      tap(() => this._redirectTo(this.authenticatedURL))
    );
  }

  signout() {
    this._unregisterToken();
    this.redirectToAuthentication();
  }

  protected _redirectTo = (url: string) => this.router.navigateByUrl(url, { clearHistory: true });
  protected _registerToken = (token: string) => setString(this.tokenKey, token);
  protected _unregisterToken = () => remove(this.tokenKey);
}
