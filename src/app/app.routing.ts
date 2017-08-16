import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { LoginComponent } from './login/login/login.component';
//import { RegistrationComponent } from './login/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
export const routes: Routes = [

{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
   {
        path: '',
        component:LayoutComponent,
        data: {
            title: 'Home'
          },
       children: [
        {
            path: 'home',
            loadChildren: './home/home.module#HomeModule'
        },
        {
            path: 'aboutus',
            loadChildren: './aboutus/aboutus.module#AboutusModule'
        },
        {
            path: 'trainors',
            loadChildren: './trainor/trainor.module#TrainorModule'
        },
        {
            path: 'login',
            loadChildren: './auth/login/login.module#LoginModule'
        },
        {
            path: 'registeration',
            loadChildren: './auth/registeration/registeration.module#RegisterationModule'
        },
        {
            path: 'gallery',
            loadChildren: './gallery/gallery.module#GalleryModule'
        },
        {
            path: 'contact',
            loadChildren: './contact/contact.module#ContactModule'
        },
        {
            path: 'category',
            loadChildren: './category/category.module#CategoryModule'
        },
        
      ]
    }
  /*{
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
 
  },
   {
    path: 'registration',
    component: RegistrationComponent,
 
  }*/
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}