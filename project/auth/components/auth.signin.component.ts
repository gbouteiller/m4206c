import { Component, ViewChild } from '@angular/core';
import { RadDataFormComponent } from 'nativescript-ui-dataform/angular/dataform-directives';

import { AuthSignin } from '../models';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'auth-signin',
  template: `
    <GridLayout rows="auto,auto">
      <RadDataForm row="0" #form [source]="signin" [isEnabled]="!loading">
        <TKEntityProperty index="0" tkDataFormProperty name="username" displayName="Identifiant" [required]="true">
          <TKPropertyEditor tkEntityPropertyEditor type="Email"> </TKPropertyEditor>
          <TKNonEmptyValidator tkEntityPropertyValidators errorMessage="Ce champ est requis."></TKNonEmptyValidator>
          <TKEmailValidator tkEntityPropertyValidators errorMessage="Veuillez saisir un courriel valide."></TKEmailValidator>
        </TKEntityProperty>
        <TKEntityProperty index="1" tkDataFormProperty name="password" displayName="Mot de passe" [required]="true">
          <TKPropertyEditor tkEntityPropertyEditor type="Password"></TKPropertyEditor>
          <TKNonEmptyValidator tkEntityPropertyValidators errorMessage="Ce champ est requis."></TKNonEmptyValidator>
        </TKEntityProperty>
      </RadDataForm>
      <Button row="1" [isEnabled]="!loading" (tap)="onSubmit()" class="btn btn-primary">
        <FormattedString>
          <Span text="\uf2f6" class="fas"></Span>
          <Span text="  JE ME CONNECTE"></Span>
        </FormattedString>
      </Button>
      <ActivityIndicator row="0" [busy]="loading" width="60" height="60" class="activity-indicator"></ActivityIndicator>
    </GridLayout>
  `,
})
export class AuthSigninComponent {
  @ViewChild('form') form: RadDataFormComponent;

  loading = false;
  signin: AuthSignin = { password: '', username: '' };

  constructor(readonly authService: AuthService) {}

  onSubmit() {
    if (this.form.dataForm.hasValidationErrors()) return;
    this.loading = true;
    this.authService.signin(this.signin).subscribe();
  }
}
