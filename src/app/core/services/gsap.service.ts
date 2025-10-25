import { Injectable } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

// Register plugins once
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

@Injectable({
  providedIn: 'root',
})
export class GsapService {
  // Export GSAP instance
  gsap = gsap;

  // Export ScrollTrigger
  ScrollTrigger = ScrollTrigger;

  // Export SplitText
  SplitText = SplitText;
}
