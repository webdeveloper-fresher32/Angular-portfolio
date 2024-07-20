import { Component } from '@angular/core';
import { Project } from '../../../projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Basic react quiz app',
      description:
        'Built and quiz app using react usereducer and prop drilling concepts in react',
      imageUrl: 'quiz-app.png',
      link: 'https://basic-react-quizz-app.netlify.app/',
    },
  ];
}
