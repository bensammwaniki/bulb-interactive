import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-allvideos',
  templateUrl: './allvideos.component.html',
  styleUrls: ['./allvideos.component.scss']
})
export class AllvideosComponent {
  items: any[] = [
    { category: 'tech', source: 'https://www.youtube.com/embed/cOSPaJfQQ60' },
    { category: 'tech', source: 'https://www.youtube.com/embed/E-ut6YXCcSs' },
    { category: 'tech', source: 'https://www.youtube.com/embed/-cG1FkIuR-g' },
    { category: 'design', source: 'https://www.youtube.com/embed/o-daKy-Oj5I' },
    { category: 'design', source: 'https://www.youtube.com/embed/01pr4sAfveY' },
    { category: 'design', source: 'https://www.youtube.com/embed/UyvuRZL0hJ8' },
    { category: 'networking', source: 'https://www.youtube.com/embed/sJUfUJQqSKo' },
    { category: 'networking', source: 'https://www.youtube.com/embed/ZrHhKMXodME' },
    { category: 'networking', source: 'https://www.youtube.com/embed/L8goreZN3Y0' },
    // Add more items with different categories and iframe sources
  ];

  filteredItems: any[] = [];
  loading: boolean = false;
  private filterSubject = new Subject<string>();

  constructor(private sanitizer: DomSanitizer) {
    this.filteredItems = this.items;
    this.filterSubject.pipe(debounceTime(300)).subscribe((category: string) => {
      this.filterItems(category);
    });
  }

  filterSelection(category: string): void {
    this.loading = true; // Show loader while filtering
    this.filterSubject.next(category);
  }

  filterItems(category: string): void {
    if (category === 'all') {
      this.filteredItems = this.items;
    } else {
      this.filteredItems = this.items.filter(item => item.category === category);
    }
    this.loading = false; // Hide loader after filtering
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  iframeLoaded(): void {
    this.loading = false;
  }
}
