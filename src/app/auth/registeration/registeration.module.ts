import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterationComponent } from './registeration.component';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
const routes: Routes = [
  {
    path: '',
    component: RegisterationComponent,
    data: {
      title: 'Registeration',
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
  declarations: [RegisterationComponent]
})
export class RegisterationModule { }
