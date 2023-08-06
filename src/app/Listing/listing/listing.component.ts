import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  featuredProducts: any[] = [];
  products: any[] = [];
  categories: any[] = [];

  slideConfig = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.newsService.getProducts().subscribe(
      (data) => {
        this.products = data;
        this.filterFeaturedProducts();
        this.getCategories();
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  filterFeaturedProducts() {
    this.featuredProducts = this.products.filter((product) => product.acf.product_category.includes('Featured Product'));
  }

  getCategories() {
    const allCategories = this.products.map((product) => product.acf.product_category).flat();
    this.categories = Array.from(new Set(allCategories)); 
  }
}
