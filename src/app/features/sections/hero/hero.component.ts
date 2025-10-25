import { Component, AfterViewInit, inject } from '@angular/core';
import { GsapService } from '../../../core/services/gsap.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements AfterViewInit {
  gsapService = inject(GsapService);

  ngAfterViewInit() {
    const { gsap } = this.gsapService;

    // Animate floating shape particles
    document.querySelectorAll('.particle').forEach((particle, index) => {
      // Infinite rotation
      gsap.to(particle, {
        rotation: 360,
        duration: `random(10, 20)`,
        ease: 'none',
        repeat: -1,
      });

      // Random floating animation for each particle
      gsap.to(particle, {
        y: `random(-80, 80)`,
        x: `random(-80, 80)`,
        duration: `random(4, 8)`,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: index * 0.3,
      });

      // Pulsing scale animation
      gsap.to(particle, {
        scale: `random(0.8, 1.2)`,
        duration: `random(3, 5)`,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: index * 0.2,
      });

      // Opacity animation
      gsap.to(particle, {
        opacity: `random(0.3, 0.7)`,
        duration: `random(3, 6)`,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: index * 0.4,
      });
    });

    // SplitText animation
    const { SplitText } = this.gsapService;
    const split = new SplitText('.hero-title-main', { type: 'words' });
    gsap.from(split.words, {
      y: 100,
      opacity: 0,
      rotationX: -90,
      duration: 1,
      ease: 'back.out(1.7)',
      stagger: 0.1,
    });

    // Subtitle
    gsap.from('.hero-subtitle', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 1.2,
    });

    // CTA button
    gsap.fromTo(
      '.hero-cta',
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: 1.6,
        ease: 'back.out(1.7)',
      },
    );

    // Background elements
    gsap.from('.hero-bg-element', {
      opacity: 0,
      scale: 0,
      duration: 2,
      ease: 'elastic.out(1, 0.5)',
      stagger: 0.2,
    });
  }

  scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
