import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // carousel array
  prolangs = [
    {
      image: 'beginners.jpg',
      title: 'JavaScript & TypeScript',
      description:
        'JavaScript makes your webpage dynamic and more interactive and TypeScript has almost the same features as JavaScript but more specific on data types.',
    },
    {
      image: 'intermediate.jpg',
      title: 'SQL & PHP',
      description:
        'Structured Query Language(SQL) implements your database using CRUD operations. Hypertext PreProcessor(PHP) is a server side language used to create dynamic websites. It is also used to bind database with your website, alongside MySQL as part of an "XAMPP" configuration.',
    },
    {
      image: 'advanced.jpg',
      title: 'Angular & React',
      description:
        'Angular is a Javascript framework built using Typescript used to build complex enterprise-grade apps like single-page apps and progressive web apps, while React is a Javascript library and built using JSX used to build UI components in any app with frequently variable data.',
    },
  ];

  // advices array
  advices = [
    'Make sure you have a solid foundation of the basics of programming. This includes understanding concepts such as variables, data types, loops, and conditional statements.',

    'Programming is like any other skill; you need to practice regularly to improve. Set aside time each day to work on coding projects or practice coding exercises.',

    'Version control systems like Git can help you manage and track changes to your code over time. Learn how to use Git and make it a part of your workflow.',

    'Break down complex programming problems into smaller, more manageable pieces. This will help you avoid feeling overwhelmed and make it easier to solve problems.',

    'Write code that is easy to read and understand. Use meaningful variable and function names, avoid overly complex syntax, and include comments where necessary.',

    'Testing your code is crucial for ensuring that it works as expected. Write test cases and run them regularly to catch errors early.',

    "Look at other people's code to learn from their approaches and techniques. Read articles and books on programming to gain new insights and ideas.",

    "If you get stuck on a problem, don't be afraid to ask for help. Reach out to other programmers in online forums, attend meetups, or ask a mentor for guidance.",

    "The programming world is constantly changing, so it's important to stay up-to-date with new technologies, trends, and best practices. Read blogs, attend conferences, and take online courses to keep your skills fresh.",

    'Remember to enjoy the process of programming! It can be frustrating at times, but it can also be incredibly rewarding when you finally solve a tough problem or build something amazing.',
  ];

  // PHP files directory
  private PHP_API_SERVER = 'http://localhost/php-bootcamp';

  constructor(private httpClient: HttpClient, private router: Router) {}

  // feedback functions
  readFeedback(): Observable<Feedback[]> {
    return this.httpClient.get<Feedback[]>(
      `${this.PHP_API_SERVER}/feedback.php`
    );
  }

  createFeedback(feedbacks: Feedback): Observable<Feedback> {
    return this.httpClient.post<Feedback>(
      `${this.PHP_API_SERVER}/create_feedback.php`,
      feedbacks
    );
  }
}
