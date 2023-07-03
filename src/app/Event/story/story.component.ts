import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent{
  currentSlideIndex = 0;
  blogs: any[] = [];

  slideConfig = { slidesToShow: 3, slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]};

constructor(private router: Router, private http: HttpClient) {}
ngOnInit() {
  this.http.get<any[]>('/assets/blogs.json').subscribe(data => {
    this.blogs = data;
  });
}
previousSlide() {
  if (this.currentSlideIndex > 0) {
    this.currentSlideIndex--;
  }
    console.log("clicked")
  }

nextSlide() {
  if (this.currentSlideIndex < this.blogs.length - 1) {
    this.currentSlideIndex++;
  }
  }
openBlog(blogId: number) {
    this.router.navigate(['/blog', blogId]);
  }

}
