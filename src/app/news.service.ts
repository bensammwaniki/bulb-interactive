import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'https://godnextdoor.org/wp-json/wp/v2/news';

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
