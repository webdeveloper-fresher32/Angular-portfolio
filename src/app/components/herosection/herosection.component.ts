import { Component, OnInit } from '@angular/core';
import { DescriptionService } from '../../services/description.service';

@Component({
  selector: 'app-herosection',
  templateUrl: './herosection.component.html',
  styleUrls: ['./herosection.component.css'],
})
export class HerosectionComponent implements OnInit {
  my_name: string = "I'm Ganesh";
  image: string = 'myimage.jpg';
  resumeurl: string =
    'https://drive.google.com/file/d/1TyhdvSsT7wX36575DRmD23D5oPQpoal-/view';
  descriptionText =
    "I'm a passionate developer with expertise in both front-end and back-end technologies.I'm always eager to learn new things and build innovative solutions. As a fast learner, I actively participate in online developer communities and attend workshops to stay up-to-date with the latest trends.";
  animatedText = '';

  constructor(private descriptionService: DescriptionService) {}
  ngOnInit(): void {
    this.descriptionService
      .animateText(this.descriptionText)
      .subscribe((text) => {
        this.animatedText = text;
      });
  }
}
