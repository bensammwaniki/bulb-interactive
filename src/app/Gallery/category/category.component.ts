import { Component } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  items: GalleryItem[] = [];
  imageData = data;

  constructor(public gallery: Gallery,public lightbox: Lightbox) { }
  ngOnInit() {
    // Creat gallery items
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl,}));


    /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Contain,
      thumbPosition: ThumbnailsPosition.Top
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }

}

const data = [
  {
    srcUrl: '../../../assets/images/img-1.jpg',
    // previewUrl: '../../../assets/images/img-1.jpg'
  },
  {
    srcUrl: 'https://drive.google.com/file/d/1nJTOuqAFTCdzk8ykgMdDF9zTaW1JGyr_/view?usp=share_link',
    // previewUrl: '../../../assets/images/img-1.jpg'
  },
];