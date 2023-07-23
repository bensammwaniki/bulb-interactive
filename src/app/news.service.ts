import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'https://godnextdoor.org/wp-json/wp/v2/news';

  constructor(private http: HttpClient) { }
  
  getNewsById(newsId: number): Observable<any> {
    const url = `${this.apiUrl}/${newsId}`;
    return this.http.get<any>(url);
  }

  getNews() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
