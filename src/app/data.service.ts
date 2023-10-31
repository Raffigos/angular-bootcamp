import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Feedback } from './feedback';
import { User } from './user';
import { Ranking } from './ranking';
import { Quiz } from './quiz';
import { Schedule } from './schedule';

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
  user?: User;
  private PHP_API_SERVER = 'http://localhost/php-bootcamp';
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
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

  // signup functions
  readUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.PHP_API_SERVER}/index.php`);
  }
  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(
      `${this.PHP_API_SERVER}/signup.php`,
      user
    );
  }

  // login functions
  isAuthenticated() {
    const currentUser = localStorage.getItem('user');
    return !!currentUser;
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  readLogin(credential: {
    email: string;
    password: string;
  }): Observable<boolean> {
    return this.httpClient.post<boolean>(
      `${this.PHP_API_SERVER}/login.php`,
      credential
    );
  }

  login(user: User) {
    if (user.email !== '' && user.password !== '') {
      localStorage.setItem('user', JSON.stringify(user));
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }

  onBeforeUnload() {
    ``;
    this.logout();
  }

  //ranking function
  getRank(): Observable<Ranking[]> {
    const user_id = localStorage.getItem('user');
    return this.httpClient.get<Ranking[]>(
      `${this.PHP_API_SERVER}user_rank.php?user_id=${user_id}&score=true`
    );
  }

  // quiz functions
  getQuizQuestions(): Observable<Quiz> {
    return this.httpClient.get<Quiz>(
      `${this.PHP_API_SERVER}quiz.php?score=true`
    );
  }

  saveScore(score: number) {
    return this.httpClient.post(`${this.PHP_API_SERVER}user_score.php`, {
      score: score,
      user_id: this.user?.id,
    });
  }

  // schedule functions
  readSchedule: string =
    'http://localhost/isd-project/api-project/schedule.php/';
  createSchedule: string =
    'http://localhost/isd-project/api-project/create_schedule.php/';
  updateSchedule: string =
    'http://localhost/isd-project/api-project/update_schedule.php/';
  deleteSchedule: string =
    'http://localhost/isd-project/api-project/delete_schedule.php/';

  fetchSchedule(userId: number) {
    return this.httpClient.get<Schedule[]>(
      `${this.readSchedule}?user_id=${userId}`
    );
  }

  addSchedule(description: string, date: string, userId: number) {
    const schedule = {
      description,
      date,
      user_id: userId,
    };
    return this.httpClient.post(this.createSchedule, schedule);
  }

  async modifySchedule(
    id: number,
    description: string,
    date: string,
    userId: number
  ): Promise<any> {
    const schedule = {
      id,
      description,
      date,
      user_id: userId,
    };

    try {
      const response = await this.httpClient
        .put(this.updateSchedule, schedule)
        .toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }

  removeSchedule(id: number, userId: number) {
    const schedule = {
      body: {
        id,
        user_id: userId,
      },
    };
    return this.httpClient.delete<Schedule>(this.deleteSchedule, schedule);
  }
}
