import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-allvideos',
  templateUrl: './allvideos.component.html',
  styleUrls: ['./allvideos.component.scss']
})
export class AllvideosComponent {
  constructor(private renderer: Renderer2) {}

  filterVideos(category: string): void {
    const columns = document.getElementsByClassName('filter');

    for (let i = 0; i < columns.length; i++) {
      const column = columns[i];

      if (category === 'all') {
        this.renderer.removeClass(column, 'hide');
        this.renderer.addClass(column, 'show');
      } else if (column.classList.contains(category)) {
        this.renderer.removeClass(column, 'hide');
        this.renderer.addClass(column, 'show');
      } else {
        this.renderer.removeClass(column, 'show');
        this.renderer.addClass(column, 'hide');
      }
    }
  }
}
