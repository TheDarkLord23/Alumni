import { Component } from '@angular/core';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.scss'
})
export class EventsPageComponent {

  events: { title: string, description: string, date: string, price: number, location: string, image: string }[] = [
    {
      title: "Business Lunch",
      description: "lorem",
      date: "02.05.2024",
      price: 150,
      location: "Vienna",
      image: "../../assets/img/lunch.jpg"
    }
  ];
}
