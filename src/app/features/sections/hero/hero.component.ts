import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
  ngOnInit() {
    this.animateHeroSection();
  }

  animateHeroSection() {
    gsap.from('.hero-title', {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: 'power3.out',
    });

    gsap.from('.hero-subtitle', {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.8,
      ease: 'power3.out',
    });

    gsap.from('.hero-cta', {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 1.1,
      ease: 'power3.out',
    });
  }

  scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
