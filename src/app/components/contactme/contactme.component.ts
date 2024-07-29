import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.css',
})
export class ContactmeComponent {
  resultMessage: string | null = null;
  resultSuccess = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = new FormData();
      formData.append('access_key', 'e3e4ab46-1379-409d-80bf-92e894822c7b');
      formData.append('name', form.value.name);
      formData.append('email', form.value.email);
      formData.append('message', form.value.message);

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
        .then(async (response) => {
          if (response.ok) {
            this.resultMessage = 'Form submitted successfully';
            setTimeout(() => {
              this.resultMessage = null;
            }, 3000);
            this.resultSuccess = true;
            form.reset();
          } else {
            const errorResponse = await response.json();
            this.resultMessage =
              errorResponse.message || 'Something went wrong!';
            this.resultSuccess = false;
          }
        })
        .catch(() => {
          this.resultMessage = 'Something went wrong!';
          this.resultSuccess = false;
        });
    }
  }
}
