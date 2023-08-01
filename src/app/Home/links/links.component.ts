import { Component, OnInit } from '@angular/core';
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
    this.getMainEvent();
  }

  getMainEvent() {
    this.newsService.getEvents().subscribe(
      (data) => {
        const today = new Date().getTime();
        let closestEvent = null;

        for (const event of data) {
          const eventDate = new Date(event.acf.date_held).getTime();
          if (eventDate >= today && (!closestEvent || eventDate < new Date(closestEvent.acf.date_held).getTime())) {
            closestEvent = event;
          }
        }

        this.mainEvent = closestEvent;
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }
}
