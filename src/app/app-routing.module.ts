import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DidYouForgetYourPasswordComponent } from './components/auth/did-you-forget-your-password/did-you-forget-your-password.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RestorePasswordComponent } from './components/auth/restore-password/restore-password.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'did-you-forget-your-password',
    component: DidYouForgetYourPasswordComponent,
  },
  {
    path: 'restore-password',
    component: RestorePasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
