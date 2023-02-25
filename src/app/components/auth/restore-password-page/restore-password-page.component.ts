import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restore-password-page',
  templateUrl: './restore-password-page.component.html',
  styleUrls: ['./restore-password-page.component.scss'],
})
export class RestorePasswordPageComponent {
  token: string | undefined = undefined;
  tokenIsValid: boolean = false;
  constructor(route: ActivatedRoute) {
    route.queryParams.subscribe((params) => {
      this.token = params['token'];
      this.tokenIsValid = this.validateToken(this.token);
    });
  }
  validateToken(token: string | undefined): boolean {
    return Boolean(token);
  }
}
