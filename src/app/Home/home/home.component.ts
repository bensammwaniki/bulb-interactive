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
    this.meta.updateTag({ name: 'description', content: "Bulb Interactive is Kenya's top networking forum for professionals. Join us to connect with industry experts, entrepreneurs, and business owners to share ideas, celebrate excellence, and take your career to the next level."} );
    this.meta.updateTag({ name: 'keywords', content: 'business networking, Kenya,  professionals, Bulb Interactive, connect,share ideas,celebrate excellence,networking forum,industry experts,entrepreneurs, business owners,career growth,new opportunities,'} );
    this.meta.updateTag({ name: 'image', content: '../src/assets/images/link(2).jpg'} );
  }
  ngOnInit(){
    this.title.setTitle("Bulb Interactive group home")
  }
}
