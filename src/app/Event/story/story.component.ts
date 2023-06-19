import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent{
  blogs = [
    { id: 1, title: 'Blog 1', image: './../../assets/images/test(3).jpg' },
    { id: 2, title: 'Blog 2', image: './../../assets/images/test(3).jpg' },
    { id: 3, title: 'Blog 3', image: './../../assets/images/test(3).jpg' },
    { id: 3, title: 'Blog 3', image: './../../assets/images/test(3).jpg' },
    { id: 3, title: 'Blog 3', image: './../../assets/images/test(3).jpg' },
  ];
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  constructor(private router: Router) {}
  openBlog(blogId: number) {
    this.router.navigate(['/blog', blogId]);
  }
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }
  ngOnInit(): void {}
}
