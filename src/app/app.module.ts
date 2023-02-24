import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/common/button/button.component';
import { AuthComponent } from './components/templates/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { InputComponent } from './input/input.component';
import { DidYouForgetYourPasswordComponent } from './components/auth/did-you-forget-your-password/did-you-forget-your-password.component';
import { RestorePasswordComponent } from './components/auth/restore-password/restore-password.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, AuthComponent, LoginComponent, InputComponent, DidYouForgetYourPasswordComponent, RestorePasswordComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
