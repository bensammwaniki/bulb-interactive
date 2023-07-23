import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  news: any[] = [];

  constructor(private newsService: NewsService,private router: Router) { }

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.newsService.getNews()
      .subscribe(
        (data) => {
          this.news = data;
        },
        (error) => {
          console.error('Error fetching news:', error);
        }
      );
  }
  openNews(newsId: number) {
    this.router.navigate(['/news', newsId]);
  }
  preview(content: string): string {
    return content.slice(0, 500);
  }
}
