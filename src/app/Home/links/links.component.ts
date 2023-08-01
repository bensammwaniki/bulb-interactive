import { Component,OnInit } from '@angular/core';
import { NewsService } from 'src/app/news.service';


@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  mainEvent: any;
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.newsService.getEvents().subscribe(
      (data) => {
        this.filterMainEvent(data);
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }

  filterMainEvent(events: any[]) {
    const today = new Date().getTime();
    for (const event of events) {
      const eventDate = new Date(event.acf.date_held).getTime();
      if (eventDate >= today) {
        this.mainEvent = event;
        return;
      }
    }
    this.mainEvent = events[events.length - 1];
  }
}

