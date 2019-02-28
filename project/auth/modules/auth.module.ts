import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';

import { AuthSigninComponent } from '../components/auth.signin.component';

const components = [AuthSigninComponent];

@NgModule({
  declarations: components,
  exports: components,
  imports: [NativeScriptCommonModule, NativeScriptUIDataFormModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AuthModule {}
