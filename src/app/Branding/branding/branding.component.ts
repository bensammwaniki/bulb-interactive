import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.scss']
})
export class BrandingComponent {

  constructor(private title: Title, private meta: Meta) {
    this.meta.updateTag({ name: 'description', content: "Bulb Interactive can help you take your digital branding to the next level. We offer a comprehensive range of services to help you create a strong and consistent brand presence online. Whether you're just starting out or you're looking to rebrand your existing business, we can help you achieve your goals."} );
  }
  ngOnInit() {
    this.title.setTitle("Bulb Interactive Events")

  }
}
