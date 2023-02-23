import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerysliderComponent } from './galleryslider.component';

describe('GallerysliderComponent', () => {
  let component: GallerysliderComponent;
  let fixture: ComponentFixture<GallerysliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallerysliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallerysliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
