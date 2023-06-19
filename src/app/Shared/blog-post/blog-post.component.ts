import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  blogId!: number;
  blog: any = {}; // Replace 'any' with the appropriate type for your blog object

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.blogId = +params.get('id')!;
      // Fetch the blog post content based on the blogId from the JSON file
      this.fetchBlogPost(this.blogId);
    });
  }
  fetchBlogPost(blogId: number) {
    this.http.get<any[]>('/assets/blogs.json').subscribe(data => {
      this.blog = data.find(blog => blog.id === blogId);
    });
  }
}
