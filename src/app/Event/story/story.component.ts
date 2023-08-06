import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NewsService } from 'src/app/news.service';


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  upcomingEvents: any[] = [];
  pastEvents: any[] = [];
  currentSlideIndex = 0;
  mainEvent: any; 
  events: any[] = []; // Store the fetched events here

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1068,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  constructor(
    private newsService: NewsService,
    private router: Router,
    private http: HttpClient
  ) {}

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
  openEvent(eventId: number) {
    this.router.navigate(['/event', eventId]);
  }
}
