import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss', './media.component.scss'],
})
export class LandingComponent {
  windowScrolled = false;
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

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });
  }

  people: {
    img: string;
    name: string;
    title: string;
    quote: string;
  }[] = [
    {
      img: '/assets/img/aleximg.jpg',
      name: 'Aleksandar Antonov',
      title: 'CTO at Adobe',
      quote:
        "From Vienna's Code Factory to Adobe's helm, my journey is an ode to dedication.",
    },
    {
      img: '/assets/img/beneimg.jpg',
      name: 'Benedikt Wychert',
      title: 'Chief Scientist Open AI',
      quote:
        'CodeFactory, a nurturing ground for tech talents in Vienna, cultivates the seeds of innovation, turning apprentices into industry leaders.',
    },
    {
      img: '/assets/img/lizaimg.jpg',
      name: 'Liza Kata Kovacs',
      title: 'Global Design Director at IDEO',
      quote:
        "CodeFactory is not just an institution; it's the crucible where my curiosity ignited and my coding dreams took flight.",
    },
  ];
}
