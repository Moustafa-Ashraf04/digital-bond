import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  services = [
    'Social Media',
    'Web Development',
    'Mobile Apps',
    'SEO Optimization',
    'Influencer Marketing',
    'SMS Campaigns',
    'Media Production',
  ];

  stats = [
    { number: '999+', label: 'Creative Ideas', icon: '💡' },
    { number: '55+', label: 'Pending Projects', icon: '📊' },
    { number: '95+', label: 'Satisfied Clients', icon: '😊' },
    { number: '10+', label: 'Success Partners', icon: '🤝' },
  ];

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }
}
