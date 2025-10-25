import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  isSubmitting = false;
  submitSuccess = false;

  contactInfo = [
    {
      icon: 'fa-solid fa-location-dot',
      title: 'Address',
      value: '11 Ahmed Al Shatouri, Ad Dokki, Giza Governorate',
      link: 'https://maps.google.com/?q=11+Ahmed+Al+Shatouri+Ad+Dokki+Giza',
    },
    {
      icon: 'fa-solid fa-envelope',
      title: 'Email',
      value: 'bonder@digitalbondmena.com',
      link: 'mailto:bonder@digitalbondmena.com',
    },
    {
      icon: 'fa-solid fa-phone',
      title: 'Phone',
      value: '+20 01021551322',
      link: 'tel:+2001021551322',
    },
  ];

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      setTimeout(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.contactForm.reset();

        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      }, 2000);
    } else {
      Object.keys(this.contactForm.controls).forEach((key) => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  isFieldInvalid(field: string) {
    const control = this.contactForm.get(field);
    return control?.invalid && control?.touched;
  }

  getFieldError(field: string) {
    const control = this.contactForm.get(field);
    if (control?.errors?.['required']) {
      return 'This field is required.';
    }
    if (control?.errors?.['email']) {
      return 'Please enter a valid email address.';
    }
    if (control?.errors?.['minlength']) {
      return `Minimum length is ${control.errors['minlength'].requiredLength} characters.`;
    }
    return '';
  }
}
