import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit{
  FeaturedProduct:any[] = []
  products: any[] = []
  slideConfig = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  constructor(private newsService: NewsService) {}
  ngOnInit() {
  }


}
