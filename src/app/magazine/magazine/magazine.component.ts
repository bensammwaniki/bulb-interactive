import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.scss']
})
export class MagazineComponent {
  constructor(private title: Title, private meta: Meta) {
    this.meta.updateTag({ name: 'description', content: "Find the latest and greatest magazines on our site, covering a wide range of topics, from fashion and beauty to travel and technology. Get a free copy online today!"} );
    this.meta.updateTag({ name: 'keywords', content: 'Networking forum,Professionals,Industry experts,Entrepreneurs,Business owners,Connecting,Sharing ideas,'} );
  }
  ngOnInit(){
    this.title.setTitle("Bulb Magazine")
  }
}
