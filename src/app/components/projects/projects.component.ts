import { Component } from '@angular/core';
import { Project } from '../../../projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Project One',
      description: 'A brief description of project one.',
      imageUrl: 'assets/project-one.jpg',
      link: 'https://example.com/project-one'
    },
    {
      title: 'Project Two',
      description: 'A brief description of project two.',
      imageUrl: 'assets/project-two.jpg',
      link: 'https://example.com/project-two'
    },
    {
      title: 'Project Three',
      description: 'A brief description of project three.',
      imageUrl: 'assets/project-three.jpg',
      link: 'https://example.com/project-three'
    }
  ];

}
