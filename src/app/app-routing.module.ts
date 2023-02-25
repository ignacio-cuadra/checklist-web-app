import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DidYouForgetYourPasswordPageComponent } from './components/auth/did-you-forget-your-password-page/did-you-forget-your-password-page.component';
import { LoginPageComponent } from './components/auth/login-page/login-page.component';
import { RestorePasswordPageComponent } from './components/auth/restore-password-page/restore-password-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';

const unauthenticatedRoutes: Routes = [
  { path: '', component: LoginPageComponent },
  {
    path: 'did-you-forget-your-password',
    component: DidYouForgetYourPasswordPageComponent,
  },
  {
    path: 'restore-password',
    component: RestorePasswordPageComponent,
  },
];

const authenticatedRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
];

const routes: Routes = [];

const isAuthenticated = true;

if (isAuthenticated) routes.push(...authenticatedRoutes);
else routes.push(...unauthenticatedRoutes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
