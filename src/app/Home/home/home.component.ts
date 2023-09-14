import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showVideoSlider = false; 
  constructor(private title: Title, private meta: Meta) {
    this.meta.updateTag({ name: 'description', content: 'This is the description for your page.'} );
    this.meta.updateTag({ name: 'keywords', content: 'Networking forum,Professionals,Industry experts,Entrepreneurs,Business owners,Connecting,Sharing ideas,'} );
    this.meta.updateTag({ name: 'image', content: '../src/assets/images/link(2).jpg'} );
  }
  ngOnInit(){
    this.title.setTitle("Bulb Interactive group home")
  }
}
