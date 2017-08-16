import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
@Component({
  moduleId: module.id + '',
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    public type: string = 'component';

    public config: SwiperConfigInterface = {
		scrollbar: null,
 		pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 4,
    centeredSlides: false,
    paginationClickable: true,
    spaceBetween: 30,


  };
  @ViewChild(SwiperComponent) swiperView: SwiperComponent;
  constructor() { }

  ngOnInit() {

    this.galleryOptions = [
   
            {   
                imageSwipe: true,
                thumbnailsArrows: false, 
                thumbnailsSwipe: true, 
                previewSwipe: true,
                imageArrows:false,
                thumbnailsColumns: 3,
                width: '100%',
                 height: '500px',
                imageAnimation: NgxGalleryAnimation.Slide,
                
            },
            // max-width 800
            {
                breakpoint: 100,
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                preview: true,
                breakpoint: 100, 
                width: '100%', 
                height:'200px', 
                thumbnailsColumns: 3 
            }
        ];
 
        this.galleryImages = [
            {
                small: 'assets/images/flex-img1.jpg',
                medium: 'assets/images/flex-img1.jpg',
                big: 'assets/images/flex-img1.jpg'
            },
            {
                small: 'assets/images/flex-img2.jpg',
                medium: 'assets/images/flex-img2.jpg',
                big: 'assets/images/flex-img2.jpg'
            },
            {
                small: 'assets/images/flex-img3.jpg',
                medium: 'assets/images/flex-img3.jpg',
                big: 'assets/3-big.jpg'
            }
        ];
    }

  onIndexChange(index: number) {
    console.log('Swiper index: ' + index);
  }
}
