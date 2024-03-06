import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  events: {
    title: string;
    description: string;
    date: string;
    price: number;
    location: string;
    image: string;
  }[] = [
    {
      title: 'Tech Talk: Web Development Trends',
      description:
        'Explore the latest trends in web development and learn from industry experts.',
      date: '15.05.2024',
      price: 0, // It's a free event
      location: 'Online',
      image: '../../assets/img/techtalk.jpg',
    },
    {
      title: 'CodeCamp 2024',
      description:
        'A hands-on coding camp where you can sharpen your programming skills with practical exercises.',
      date: '01.07.2024',
      price: 250,
      location: 'Tech Hub City',
      image: '../../assets/img/camp.jpg',
    },
  ];
}
