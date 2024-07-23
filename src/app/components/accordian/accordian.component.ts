import { Component } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrl: './accordian.component.css',
})
export class AccordianComponent {
  certifications = [
    {
      certifiedby: 'Venkys.io',
      title: 'Associate software developer - Internship',
      imageurl: 'Internship at Venkysio.png',
    },
    {
      certifiedby: 'HackerRank',
      title: 'Programming with Python',
      imageurl: 'Hacker-rank.png',
    },
    {
      certifiedby: 'Intenshala',
      title: 'Web development',
      imageurl: 'Intenshala.png',
    },
    {
      certifiedby: 'Udemy',
      title: 'Web development Udemy',
      imageurl: 'Udemy-webdevelopment.jpg',
    },
    {
      certfiedby: 'Udemy',
      title: 'DSA in Python',
      imageurl: 'udemy-dsa-in-python.jpg',
    },
    {
      certifiedby: 'LetsUpgrade',
      title: 'ReactJS Bootcamp',
      imageurl: 'React JS workshop.png',
    },
    {
      certifiedby: 'Swecha',
      title: 'Webdevelopment and data science',
      imageurl: 'Web development swecha.png',
    },
  ];
}
