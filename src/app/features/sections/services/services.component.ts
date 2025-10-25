import { Component, inject } from '@angular/core';
import { GsapService } from '../../../core/services/gsap.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-services',
  imports: [CarouselModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  gsapService = inject(GsapService);

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    items: 1,
    nav: false,
    margin: 20,
  };

  services = [
    {
      title: 'Social Media',
      description:
        'Build your brand presence across all social platforms with engaging content and strategies.',
      icon: 'fa-solid fa-hashtag',
    },
    {
      title: 'Web Development',
      description:
        'Modern, responsive websites built with cutting-edge technologies for optimal performance.',
      icon: 'fa-solid fa-code',
    },
    {
      title: 'Mobile Apps',
      description:
        'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      icon: 'fa-solid fa-mobile-screen-button',
    },
    {
      title: 'SEO Optimization',
      description:
        'Boost your visibility and rank higher on search engines with our proven SEO strategies.',
      icon: 'fa-solid fa-magnifying-glass-dollar',
    },
    {
      title: 'Influencer Marketing',
      description:
        'Connect with the right influencers to amplify your brand message and reach.',
      icon: 'fa-solid fa-bullhorn',
    },
    {
      title: 'SMS Campaigns',
      description:
        'Direct and effective SMS marketing campaigns that convert leads into customers.',
      icon: 'fa-solid fa-comment-sms',
    },
    {
      title: 'Media Production',
      description:
        'High-quality video and photo production services that tell your brand story.',
      icon: 'fa-solid fa-video',
    },
  ];

  ngAfterViewInit() {
    const { gsap } = this.gsapService;

    gsap.from('.services-header > *', {
      scrollTrigger: '.services-header',
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
    });
  }
}
