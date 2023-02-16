import { Component } from '@angular/core';

@Component({
  selector: 'app-video-slider',
  templateUrl: './video-slider.component.html',
  styleUrls: ['./video-slider.component.scss']
})
export class VideoSliderComponent {
  apiLoaded = false;

  videoId = 'QIZ9aZD6vs0';
  height = 180;
  width =320;

  startSeconds = 60;
  endSeconds = 120;

  ngOnInit() {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
}
