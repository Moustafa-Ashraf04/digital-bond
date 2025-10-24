import { Component } from '@angular/core';
import { HeroComponent } from '../sections/hero/hero.component';
import { AboutComponent } from '../sections/about/about.component';
import { ServicesComponent } from '../sections/services/services.component';
import { ReviewsComponent } from '../sections/reviews/reviews.component';
import { ContactComponent } from '../sections/contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    ReviewsComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
