import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTvComponent } from './about-tv.component';

describe('AboutTvComponent', () => {
  let component: AboutTvComponent;
  let fixture: ComponentFixture<AboutTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
