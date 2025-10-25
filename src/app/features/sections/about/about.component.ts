import { Component, AfterViewInit, inject } from '@angular/core';
import { GsapService } from '../../../core/services/gsap.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements AfterViewInit {
  gsapService = inject(GsapService);

  stats = [
    {
      number: '999+',
      label: 'Creative Ideas',
      icon: 'fa-solid fa-lightbulb',
      color: 'text-yellow-400',
    },
    {
      number: '55+',
      label: 'Pending Projects',
      icon: 'fa-solid fa-list-check',
      color: 'text-blue-600',
    },
    {
      number: '95+',
      label: 'Satisfied Clients',
      icon: 'fa-solid fa-face-smile',
      color: 'text-green-400',
    },
    {
      number: '10+',
      label: 'Success Partners',
      icon: 'fa-solid fa-handshake',
      color: 'text-amber-600',
    },
  ];

  ngAfterViewInit() {
    const { gsap, SplitText } = this.gsapService;

    // Badge label animation
    gsap.from('.about-badge-label', {
      scrollTrigger: {
        trigger: '.about-content',
        start: 'top 80%',
      },
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.7)',
    });

    // Split text animation for title
    const titleElement = document.querySelector('.about-title');
    if (titleElement) {
      const split = new SplitText('.about-title', { type: 'words,chars' });
      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: '.about-title',
          start: 'top 85%',
        },
        opacity: 0,
        y: 50,
        rotationX: -90,
        transformOrigin: 'top center',
        duration: 0.8,
        ease: 'back.out(1.7)',
        stagger: 0.02,
      });
    }

    // Animate image with scale and rotation
    gsap.from('.about-image', {
      scrollTrigger: {
        trigger: '.about-image',
        start: 'top 80%',
      },
      x: -100,
      opacity: 0,
      scale: 0.8,
      rotation: -5,
      duration: 0.8,
      ease: 'power2.out',
    });

    // Animate floating badge
    gsap.from('.about-badge', {
      scrollTrigger: {
        trigger: '.about-image',
        start: 'top 80%',
      },
      scale: 0,
      rotation: 180,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      ease: 'back.out(1.7)',
    });

    // Animate paragraphs
    gsap.from('.about-text', {
      scrollTrigger: {
        trigger: '.about-content',
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
    });

    // Animate features with bounce
    gsap.from('.about-feature', {
      scrollTrigger: {
        trigger: '.about-features',
        start: 'top 85%',
      },
      y: 50,
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      stagger: 0.15,
      ease: 'back.out(1.7)',
    });

    // Animate numbers counting up
    document.querySelectorAll('.stat-card').forEach((card) => {
      const numberElement = card.querySelector('.text-4xl');
      if (numberElement) {
        const finalText = numberElement.textContent || '';
        const number = parseInt(finalText.replace(/\D/g, ''));
        const suffix = finalText.replace(/[0-9]/g, '');

        const counter = { value: 0 };
        gsap.to(counter, {
          scrollTrigger: {
            trigger: '.stats-container',
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
          value: number,
          duration: 2,
          ease: 'power1.out',
          onUpdate: function () {
            numberElement.textContent = Math.floor(counter.value) + suffix;
          },
        });
      }
    });
  }
}
