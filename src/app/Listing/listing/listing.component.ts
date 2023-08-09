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
  companyLogos: any[] = [];

  slideConfig = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear',
    arrows:false,
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
        this.getCompanyLogos();
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
  getCompanyLogos() {
    this.products.forEach((product) => {
      const logo = product.acf.company_logo;
      if (logo && !this.companyLogos.includes(logo)) {
        this.companyLogos.push(logo);
      }
    });
  }
}
