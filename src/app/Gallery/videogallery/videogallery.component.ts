import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-videogallery',
  templateUrl: './videogallery.component.html',
  styleUrls: ['./videogallery.component.scss']
})
export class VideogalleryComponent {
  showVideoSlider = false; 
  constructor(private title: Title, private meta: Meta) {
    this.meta.updateTag({ name: 'description', content: "At Bulb Interactive, we believe that business networking is all about connecting with people. That's why we love sharing photos and videos from our past events. Check out our gallery to see what you missed and get inspired to attend our next event!"} );
  }
  ngOnInit() {
    this.title.setTitle("Gallery")

  }
}
