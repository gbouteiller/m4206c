import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { AuthModule } from '~/auth/modules/auth.module';

import { AppAuthenticatedHandler } from '../components/app.authenticated.handler';
import { AppHandler } from '../components/app.handler';
import { AppPublicHandler } from '../components/app.public.handler';
import { AppCachingInterceptor } from '../services/app.caching.interceptor';
import { AppErrorInterceptor } from '../services/app.error.interceptor';
import { AppRedirectInterceptor } from '../services/app.redirect.interceptor';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  bootstrap: [AppHandler],
  declarations: [AppHandler, AppAuthenticatedHandler, AppPublicHandler],
  imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptHttpClientModule, AuthModule, AppRoutingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppRedirectInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppCachingInterceptor,
      multi: true,
    },
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
