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
      title: 'Full stack code editor using MERN stack',
      description:
        'Built a full fludged IDE using MERN stack technologies where user can write code and run the code and get the output',
      imageUrl: 'IDE.png',
      link: 'https://code.venkys.io/login',
    },
    {
      title: 'Chat Application using MERN stack',
      description:
        'Built a chat application using socket.io and node.js , React.js, Express.js, MongoDB, where user can chat with each other in real time and also can create rooms and chat in rooms as well.',
      imageUrl: 'demoofchatapp.mp4',
      link: 'https://ichat-app-using-react-and-fir-git-21d695-webdeveloper-fresher32.vercel.app/login',
    },
    {
      title: 'Basic react quiz app',
      description:
        'Built and quiz app using react usereducer and prop drilling concepts in react',
      imageUrl: 'quiz-app.png',
      link: 'https://basic-react-quizz-app.netlify.app/',
    },
  ];
}
