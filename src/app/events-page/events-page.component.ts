import { Component } from '@angular/core';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.scss'
})
export class EventsPageComponent {

  events: { title: string, description: string, date: string, price: number, location: string, image: string }[] = [
    {
      title: "Tech Talk: Web Development Trends",
      description: "Explore the latest trends in web development and learn from industry experts.",
      date: "15.05.2024",
      price: 0, // It's a free event
      location: "Online",
      image: "../../assets/img/techtalk.jpg"
    },
    {
      title: "CodeCamp 2024",
      description: "A hands-on coding camp where you can sharpen your programming skills with practical exercises.",
      date: "01.07.2024",
      price: 250,
      location: "Tech Hub City",
      image: "../../assets/img/camp.jpg"
    },
    {
      title: "Hackathon: Build the Future",
      description: "Join our hackathon to build innovative solutions and showcase your coding prowess.",
      date: "20.08.2024",
      price: 0,
      location: "Innovation Center",
      image: "../../assets/img/hacking.jpg"
    },
    {
      title: "AI in Action: Workshop",
      description: "A workshop on practical applications of artificial intelligence in software development.",
      date: "10.06.2024",
      price: 150,
      location: "Tech Hub City",
      image: "../../assets/img/ai.jpg"
    },
    {
      title: "Networking Night: Tech Professionals",
      description: "Connect with fellow tech professionals and expand your network in a casual setting.",
      date: "25.07.2024",
      price: 30,
      location: "City Rooftop Lounge",
      image: "../../assets/img/network.jpg"
    },
    {
      title: "Cybersecurity Conference",
      description: "Stay updated on the latest trends and best practices in cybersecurity.",
      date: "19.05.2024",
      price: 200,
      location: "Security Hub",
      image: "../../assets/img/cybersecurity.jpg"
    },
    {
      title: "Tech Startup Pitch Night",
      description: "Witness innovative startup pitches and explore investment opportunities.",
      date: "05.08.2024",
      price: 50,
      location: "Startup Hub",
      image: "../../assets/img/startup.jpg"
    },
    {
      title: "DevOps Workshop",
      description: "Learn how to implement effective DevOps practices for seamless software development.",
      date: "30.06.2024",
      price: 120,
      location: "Tech Training Center",
      image: "../../assets/img/workshop.jpg"
    },
  ];

  sortByDate() {
    this.events.sort((a, b) => {
      const dateA = this.convertToDate(a.date);
      const dateB = this.convertToDate(b.date);

      return dateA.getTime() - dateB.getTime();
    });
  }

  private convertToDate(dateString: string): Date {
    const [day, month, year] = dateString.split('.').map(Number);
    return new Date(year, month - 1, day); // Month is 0-based
  }

  sortByPrice() {
    this.events.sort((a, b) => a.price - b.price);
  }
}
