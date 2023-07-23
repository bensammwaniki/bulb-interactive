import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  newsId!: number;
  news: any = {};

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService // Inject the NewsService here
  ) {}

  ngOnInit(): void {
    // Extract the 'id' parameter directly from the URL
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.newsId = idParam ? +idParam : 0; // Convert the string to a number
      // Fetch the news article content based on the newsId using the NewsService
      this.fetchNewsArticle(this.newsId);
    });
  }

  fetchNewsArticle(newsId: number) {
    this.newsService.getNewsById(newsId).subscribe(
      news => {
        this.news = news;
      },
      error => {
        console.error('Error fetching news article:', error);
      }
    );
  }
}
