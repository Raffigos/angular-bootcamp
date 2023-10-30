import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

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
}
