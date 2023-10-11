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
      id: '1', img: "assets/images/hari.jpg",
      name: "Harikrishnan", designation: "Student | Mar Baselios Christian College of Engineering and Technology",
      para: "As a college student, finding quality training that aligns with my academic pursuits was crucial. XYVIN exceeded my expectations. The courses were not only relevant to my studies but also provided a practical edge that set me apart. The internship experience was invaluable, offering a real-world perspective that complemented my academic knowledge. I am grateful for the opportunities XYVIN has provided for my academic and professional growth."
    },
    {
      id: '2',
      img: "assets/images/vysakh.jpeg",
      name: "Vysakh Raj K S", designation: "Student | MACFAST",
      para: "I can't recommend XYVIN enough! The online courses offered a perfect blend of flexibility and depth. The engaging content and practical exercises allowed me to grasp complex IT concepts with ease. The supportive community and career support services were the icing on the cake. Today, I feel well-prepared and confident, all thanks to the exceptional training I received."
    },

    {
      id: '3', img: "assets/images/printo.jpeg",
      name: "Printo P Varghese", designation: "Student | MACFAST",
      para: "Enrolling in courses at XYVIN was a game-changer for my career. The structured curriculum, hands-on projects, and expert instructors provided me with the skills and confidence I needed to excel in the field of web development. The internship opportunity further solidified my knowledge, and I am now working in a rewarding position thanks to the valuable experience gained from the program."
    },

    {
      id: '4', img: "assets/images/rizwan.jpg",
      name: "Mohammed Rizwan", designation: "Student | MES COLLEGE MARAMPILLY ALUVA",
      para: "As a dedicated college student, I was on a quest to find a training program that perfectly aligned with my academic pursuits. XYVIN, without a doubt, exceeded all my expectations. The courses were not only tailored to my studies but also provided a practical edge that truly set me apart in my field of study. The internship experience was nothing short of invaluable, offering a real-world perspective that beautifully complemented my academic knowledge. I am profoundly thankful for the countless opportunities that XYVIN has provided to support my academic and professional growth as a college student."
    },

    {
      id: '5', img: "assets/images/adil.jpg",
      name: "Adil Shabab", designation: "Student | Ignou",
      para: "As a driven college student, I was determined to find a training program that would complement my academic journey, and XYVIN did just that and more. The courses provided were not only relevant to my studies but also offered a practical edge that enhanced my skills and knowledge. The internship experience was a game-changer, providing me with a real-world perspective that seamlessly integrated with my academic foundation. I am genuinely grateful for the enriching opportunities XYVIN has given me to foster my academic and professional growth as a college student."
    },

  ];

}
