import {
  Component,
  OnInit,
  PLATFORM_ID,
  Inject,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
})
export class ReviewsComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  reviews = [
    {
      name: 'Mohamed Salah',
      position: 'CEO, AutoZ',
      review:
        'Working with Digital Bond has been a game-changer for our business. Their creative approach and commitment to excellence helped us increase our online presence by 300%!',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      name: 'Sarah Ahmed',
      position: 'Marketing Director, Carats',
      review:
        'The team at Digital Bond truly understands digital marketing. They delivered beyond our expectations and helped us reach our target audience effectively.',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'Ahmed Hassan',
      position: 'Founder, TechStart',
      review:
        'Professional, creative, and results-driven. Digital Bond transformed our brand identity and helped us stand out in a competitive market.',
      rating: 5,
      avatar: '🧑‍💻',
    },
    {
      name: 'Layla Ibrahim',
      position: 'CMO, Fashion Forward',
      review:
        'Their social media campaigns and influencer marketing strategies delivered exceptional ROI. Highly recommended!',
      rating: 5,
      avatar: '👩‍🎨',
    },
    {
      name: 'Omar Khaled',
      position: 'Director, Mega Corp',
      review:
        'From web development to SEO optimization, Digital Bond provided comprehensive solutions that exceeded all our expectations.',
      rating: 5,
      avatar: '👨‍💼',
    },
  ];

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initSwiper();
    }
  }

  async initSwiper() {
    const { register } = await import('swiper/element/bundle');
    register();
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
