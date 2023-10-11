import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {



  customOptions: OwlOptions = {

    loop: true,

    mouseDrag: false,

    touchDrag: false,

    pullDrag: false,

    dots: true,

    navSpeed: 700,

    margin: 1,

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



  slidesStore = [

    {
      id: '1', img: "assets/images/testimonial-author.jpg",
      name: "Tijo Joseph", designation: "Student | Macfast",
      para: "Enrolling in courses at XYVIN was a game-changer for my career. The structured curriculum, hands-on projects, and expert instructors provided me with the skills and confidence I needed to excel in the field of web development. The internship opportunity further solidified my knowledge, and I am now working in a rewarding position thanks to the valuable experience gained from the program."
    },

    {
      id: '2',
      img: "assets/images/testimonial-author.jpg",
      name: "Alan Mathew", designation: "Student | Macfast",
      para: "I can't recommend XYVIN enough! The online courses offered a perfect blend of flexibility and depth. The engaging content and practical exercises allowed me to grasp complex IT concepts with ease. The supportive community and career support services were the icing on the cake. Today, I feel well-prepared and confident, all thanks to the exceptional training I received."
    },

    {
      id: '3', img: "assets/images/testimonial-author.jpg",
      name: "Mohammed Rizwan", designation: "Student | Macfast",
      para: "As a college student, finding quality training that aligns with my academic pursuits was crucial. XYVIN exceeded my expectations. The courses were not only relevant to my studies but also provided a practical edge that set me apart. The internship experience was invaluable, offering a real-world perspective that complemented my academic knowledge. I am grateful for the opportunities XYVIN has provided for my academic and professional growth."
    },


  ];

}
