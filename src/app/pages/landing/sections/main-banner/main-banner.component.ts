import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss']
})
export class MainBannerComponent {


  customOptions: OwlOptions = {

    loop: true,

    mouseDrag: false,

    touchDrag: false,

    pullDrag: false,

    dots: true,

    navSpeed: 700,

    margin:1,

    navText: ['', ''],

    responsive: {

      0: {

        items: 1

      },

      400: {

        items: 1

      },

      740: {

        items: 1

      },

      940: {

        items: 1

      }

    },

    nav: false

  }

  

    slides = [

      {id: 1, img: "assets/images/banner-item-01.jpg", heading:"Our Courses",mainHeading:"Get the best result out of your effort", para:"You are allowed to use this template for any educational or commercial purpose. You are not allowed to re-distribute the template ZIP file on any other website."},

      {id: 2, img: "assets/images/banner-item-02.jpg",heading:"Our Courses",mainHeading:"Get the best result out of your effort", para:"You are allowed to use this template for any educational or commercial purpose. You are not allowed to re-distribute the template ZIP file on any other website."},

      {id: 3, img: "assets/images/banner-item-03.jpg",heading:"Our Courses",mainHeading:"Get the best result out of your effort", para:"You are allowed to use this template for any educational or commercial purpose. You are not allowed to re-distribute the template ZIP file on any other website."},


    ];




}
