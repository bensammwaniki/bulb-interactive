import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  showVideoSlider = false; 
  constructor(private title: Title, private meta: Meta) {
    this.meta.updateTag({ name: 'description', content: "Bulb Interactive is your one-stop shop for finding upcoming and previous business networking events in Kenya. We have a wide selection of events to choose from, covering all industries and professions. Whether you're looking to connect with industry experts, learn new skills, or simply network with other professionals, we have the perfect event for you."} );
  }
  ngOnInit() {
    this.title.setTitle("Bub Interactive Events")

  }

}
