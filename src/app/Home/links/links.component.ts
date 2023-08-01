import { Component,OnInit } from '@angular/core';
import { NewsService } from 'src/app/news.service';


@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  upcomingEvents: any[] = [];
  pastEvents: any[] = [];
  currentSlideIndex = 0;
  mainEvent: any; 
  events: any[] = [];
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.newsService.getEvents().subscribe(
      (data) => {
        this.events = data;
        this.filterEventsByDate(); // Separate upcoming and past events
        this.sortEventsByDate();
        this.getMainEvent(); // Get the main event
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }
  
  filterEventsByDate() {
    const today = new Date().getTime();
    this.upcomingEvents = this.events.filter(event => {
      const eventDate = new Date(event.acf.date_held).getTime();
      return eventDate >= today;
    });

    this.pastEvents = this.events.filter(event => {
      const eventDate = new Date(event.acf.date_held).getTime();
      return eventDate < today;
    });
  }
  
  sortEventsByDate() {
    this.upcomingEvents.sort((a, b) => {
      return new Date(a.acf.date_held).getTime() - new Date(b.acf.date_held).getTime();
    });

    this.pastEvents.sort((a, b) => {
      return new Date(a.acf.date_held).getTime() - new Date(b.acf.date_held).getTime();
    });
  }

  getMainEvent() {
    const today = new Date().getTime();
    for (const event of this.upcomingEvents) {
      const eventDate = new Date(event.acf.date_held).getTime();
      if (eventDate >= today) {
        this.mainEvent = event;
        return;
      }
    }
    this.mainEvent = this.upcomingEvents[this.upcomingEvents.length - 1];
  }
}

