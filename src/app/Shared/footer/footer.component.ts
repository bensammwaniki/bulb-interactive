import { Component } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  ngOnInit() {
    AOS.init();
  }
}
