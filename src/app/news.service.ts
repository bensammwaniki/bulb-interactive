import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'https://godnextdoor.org/wp-json/wp/v2/news';
  private eventUrl = 'https://godnextdoor.org/wp-json/wp/v2/events';
  private productUrl = 'https://godnextdoor.org/wp-json/wp/v2/products';

  constructor(private http: HttpClient) { }
  
  getNewsById(newsId: number): Observable<any> {
    const url = `${this.apiUrl}/${newsId}`;
    return this.http.get<any>(url);
  }

  getNews() {
    return this.http.get<any[]>(this.apiUrl);
  }
  getEventsById(events: number): Observable<any> {
    const url = `${this.eventUrl}/${events}`;
    return this.http.get<any>(url);
  }

  getEvents() {
    return this.http.get<any[]>(this.eventUrl);
  }

  getProductById(product: number): Observable<any> {
    const url = `${this.productUrl}/${product}`;
    return this.http.get<any>(url);
  }

  getProducts() {
    return this.http.get<any[]>(this.productUrl);
  }
}
