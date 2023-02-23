import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { NavBarComponent } from './Shared/nav-bar/nav-bar.component';
import { HomeComponent } from './Home/home/home.component';
import { SliderComponent } from './Home/slider/slider.component';
import { LinksComponent } from './Home/links/links.component';
import { VideoSliderComponent } from './Shared/video-slider/video-slider.component';
import { PartnersComponent } from './Home/partners/partners.component';
import { MagazineComponent } from './magazine/magazine/magazine.component';
import { MagazineSliderComponent } from './magazine/magazine-slider/magazine-slider.component';
import { EditionsComponent } from './magazine/editions/editions.component';
import { VideogalleryComponent } from './Gallery/videogallery/videogallery.component';
import { CategoryComponent } from './Gallery/category/category.component';
import { GallerysliderComponent } from './Gallery/galleryslider/galleryslider.component';
import { EventsComponent } from './Event/events/events.component';
import { StoryComponent } from './Event/story/story.component';
import { SpeakersComponent } from './Event/speakers/speakers.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    HomeComponent,
    SliderComponent,
    LinksComponent,
    VideoSliderComponent,
    PartnersComponent,
    MagazineComponent,
    MagazineSliderComponent,
    EditionsComponent,
    VideogalleryComponent,
    CategoryComponent,
    GallerysliderComponent,
    EventsComponent,
    StoryComponent,
    SpeakersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayerModule,
    RouterModule.forRoot([
      {
        path:'',
        component: HomeComponent
      },
      {
        path:'magazine',
        component: MagazineComponent
      },
      {
        path:'videos',
        component: VideogalleryComponent
      },
      {
        path:'events',
        component: EventsComponent
      },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
