import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogalleryComponent } from './videogallery.component';

describe('VideogalleryComponent', () => {
  let component: VideogalleryComponent;
  let fixture: ComponentFixture<VideogalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideogalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideogalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
