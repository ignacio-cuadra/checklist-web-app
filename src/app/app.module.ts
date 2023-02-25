import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/common/button/button.component';
import { AuthTemplateComponent } from './components/templates/auth-template/auth-template.component';
import { LoginPageComponent } from './components/auth/login-page/login-page.component';
import { DidYouForgetYourPasswordPageComponent } from './components/auth/did-you-forget-your-password-page/did-you-forget-your-password-page.component';
import { RestorePasswordPageComponent } from './components/auth/restore-password-page/restore-password-page.component';
import { MainTemplateComponent } from './components/templates/main-template/main-template.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { BreadcrumbComponent } from './components/common/breadcrumb/breadcrumb.component';
import { LogoComponent } from './components/common/logo/logo.component';
import { ChecklistTableComponent } from './components/checklist/checklist-table/checklist-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    AuthTemplateComponent,
    LoginPageComponent,
    DidYouForgetYourPasswordPageComponent,
    RestorePasswordPageComponent,
    MainTemplateComponent,
    HomePageComponent,
    BreadcrumbComponent,
    LogoComponent,
    ChecklistTableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
