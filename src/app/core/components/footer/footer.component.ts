import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  showBackToTop = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show button when scrolled down more than 300px
    this.showBackToTop = window.scrollY > 300;
  }

  quickLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'About', sectionId: 'about' },
    { label: 'Services', sectionId: 'services' },
    { label: 'Reviews', sectionId: 'reviews' },
    { label: 'Contact', sectionId: 'contact' },
  ];

  services = [
    'Social Media',
    'Web Development',
    'Mobile Apps',
    'SEO Optimization',
    'Influencer Marketing',
    'SMS Campaigns',
    'Media Production',
  ];

  socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/DigitalBondMena/',
      icon: 'fa-brands fa-facebook-f',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@digitalbondmena',
      icon: 'fa-brands fa-tiktok',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/digital-bond/',
      icon: 'fa-brands fa-linkedin-in',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/digitalbondmena/',
      icon: 'fa-brands fa-instagram',
    },
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
