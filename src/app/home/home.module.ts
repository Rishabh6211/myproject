import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes,RouterModule } from '@angular/router';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgxGalleryModule } from 'ngx-gallery';

const SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 3,
  slidesPerView: 3,
  centeredSlides: true,
  keyboardControl: true
};

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home',
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SwiperModule.forRoot(SWIPER_CONFIG),
    NgxGalleryModule
  ],
  exports: [RouterModule],
  declarations: [HomeComponent]
})
export class HomeModule { }
