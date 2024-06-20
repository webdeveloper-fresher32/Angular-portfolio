import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  constructor() { }


  animateText(text: string): Observable<string> {
    return new Observable(observer => {
      let displayedText = '';
      const intervalId = setInterval(() => {
        if (displayedText.length === text.length) {
          clearInterval(intervalId);
          observer.complete();
          return;
        }
        displayedText += text.charAt(displayedText.length); 
        observer.next(displayedText);
      }, 25);
    });
  }
}
