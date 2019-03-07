import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  template: `
    <FlexboxLayout flexDirection="column" justifyContent="center">
      <Image src="~/images/logo.png" width="300" marginBottom="80"></Image>
      <auth-signin></auth-signin>
    </FlexboxLayout>
  `,
})
export class AppPublicHandler implements OnInit {
  constructor(readonly page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = true;
  }
}
