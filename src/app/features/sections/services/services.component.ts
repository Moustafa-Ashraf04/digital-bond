import {
  Component,
  OnInit,
  PLATFORM_ID,
  Inject,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  services = [
    {
      title: 'Social Media',
      description:
        'Build your brand presence across all social platforms with engaging content and strategies.',
      icon: '📱',
    },
    {
      title: 'Web Development',
      description:
        'Modern, responsive websites built with cutting-edge technologies for optimal performance.',
      icon: '💻',
    },
    {
      title: 'Mobile Apps',
      description:
        'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      icon: '📲',
    },
    {
      title: 'SEO Optimization',
      description:
        'Boost your visibility and rank higher on search engines with our proven SEO strategies.',
      icon: '🔍',
    },
    {
      title: 'Influencer Marketing',
      description:
        'Connect with the right influencers to amplify your brand message and reach.',
      icon: '⭐',
    },
    {
      title: 'SMS Campaigns',
      description:
        'Direct and effective SMS marketing campaigns that convert leads into customers.',
      icon: '💬',
    },
    {
      title: 'Media Production',
      description:
        'High-quality video and photo production services that tell your brand story.',
      icon: '🎬',
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
}
