import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/news.service';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  news: any[] = [];

  constructor(private newsService: NewsService,private router: Router,private title: Title, private meta: Meta) { 
      this.meta.updateTag({ name: 'description', content: "Stay up-to-date on the latest business news in Kenya with Bulb Interactive. We cover everything from industry trends to company announcements to government policies. Get the latest news from Kenya's top business professionals."} );
  }
  ngOnInit() {
    this.getNews();
    this.title.setTitle("Bulb Magazine")

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
