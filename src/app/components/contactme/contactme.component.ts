import { Component } from '@angular/core';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.css',
})
export class ContactmeComponent {
  contactForm = {
    name: '',
    email: '',
    message: '',
  };

  sendEmail() {
    const { name, email, message } = this.contactForm;
    const subject = `Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:pirikiralaganesh1234@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }
}
