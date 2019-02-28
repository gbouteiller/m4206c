import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { AuthGuard } from '~/auth/services/auth.guard';

import { AppAuthenticatedHandler } from '../components/app.authenticated.handler';
import { AppPublicHandler } from '../components/app.public.handler';

const routes: Routes = [
  {
    path: '',
    component: AppAuthenticatedHandler,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/articles', pathMatch: 'full' },
      {
        path: 'articles',
        loadChildren: '~/product/modules/product.module#ProductModule',
        canLoad: [AuthGuard],
      },
    ],
  },
  { path: 'connexion', component: AppPublicHandler },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
