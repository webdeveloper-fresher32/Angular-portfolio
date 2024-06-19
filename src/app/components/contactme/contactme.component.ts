import { Component } from '@angular/core';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.css'
})
export class ContactmeComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  constructor() { }

  onSubmit() {
    // Handle form submission, e.g., send the form data to a server
    console.log('Form submitted:', this.contactForm);
    // Reset form
    this.contactForm = {
      name: '',
      email: '',
      message: ''
    };
  }
}
