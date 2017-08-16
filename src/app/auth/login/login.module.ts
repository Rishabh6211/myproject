import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login',
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    CustomFormsModule
  ],
  exports: [RouterModule],
  declarations: [LoginComponent],

})
export class LoginModule { }
