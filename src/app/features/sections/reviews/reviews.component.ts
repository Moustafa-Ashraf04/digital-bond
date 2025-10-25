import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { NgxMarqueeComponent } from '@omnedia/ngx-marquee';

@Component({
  selector: 'app-reviews',
  imports: [CarouselModule, NgxMarqueeComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
})
export class ReviewsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
    nav: false,
  };

  reviews = [
    {
      name: 'Mohamed Salah',
      position: 'CEO, AutoZ',
      review:
        'Working with Digital Bond has been a game-changer for our business. Their creative approach and commitment to excellence helped us increase our online presence by 300%!',
      rating: 5,
      icon: 'fa-solid fa-user',
    },
    {
      name: 'Sarah Ahmed',
      position: 'Marketing Director, Carats',
      review:
        'The team at Digital Bond truly understands digital marketing. They delivered beyond our expectations and helped us reach our target audience effectively.',
      rating: 5,
      icon: 'fa-solid fa-user',
    },
    {
      name: 'Ahmed Hassan',
      position: 'Founder, TechStart',
      review:
        'Professional, creative, and results-driven. Digital Bond transformed our brand identity and helped us stand out in a competitive market.',
      rating: 5,
      icon: 'fa-solid fa-user',
    },
    {
      name: 'Layla Ibrahim',
      position: 'CMO, Fashion Forward',
      review:
        'Their social media campaigns and influencer marketing strategies delivered exceptional ROI. Highly recommended!',
      rating: 5,
      icon: 'fa-solid fa-user',
    },
    {
      name: 'Omar Khaled',
      position: 'Director, Mega Corp',
      review:
        'From web development to SEO optimization, Digital Bond provided comprehensive solutions that exceeded all our expectations.',
      rating: 5,
      icon: 'fa-solid fa-user',
    },
  ];

  partners = [
    {
      name: 'Bob Sultan',
      logo: 'images/partners/bob-sushi.png',
    },
    {
      name: 'Concentrix',
      logo: 'images/partners/concentrix.png',
    },
    {
      name: 'Edugate',
      logo: 'images/partners/edugate.png',
    },
    {
      name: 'el-nasser',
      logo: 'images/partners/el-nasser.png',
    },
    {
      name: 'Farouk',
      logo: 'images/partners/farouk.png',
    },
    {
      name: 'Harvest',
      logo: 'images/partners/harvest.png',
    },
    {
      name: 'House',
      logo: 'images/partners/house.png',
    },
    {
      name: 'Monginis',
      logo: 'images/partners/monginis.png',
    },
    {
      name: 'Triumph',
      logo: 'images/partners/triumph.png',
    },
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
