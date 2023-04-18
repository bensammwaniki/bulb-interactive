import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GalleryModule } from  'ng-gallery';
import { LightboxModule } from  'ng-gallery/lightbox';
import { LIGHTBOX_CONFIG } from 'ng-gallery/lightbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';



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
import { BrandingComponent } from './Branding/branding/branding.component';
import { AboutComponent } from './Branding/about/about.component';
import { PackagesComponent } from './Branding/packages/packages.component';
import { ContainerComponent } from './Branding/container/container.component';
import { TicketComponent } from './Shared/ticket/ticket.component';
import { SocialsComponent } from './Shared/socials/socials.component';
import { AboutTvComponent } from './Home/about-tv/about-tv.component';

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
    SpeakersComponent,
    BrandingComponent,
    AboutComponent,
    PackagesComponent,
    ContainerComponent,
    TicketComponent,
    SocialsComponent,
    AboutTvComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GalleryModule,
    LightboxModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ShareButtonsModule,
    ShareIconsModule,
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
      {
        path:'branding',
        component: BrandingComponent
      },

    ])
  ],
  providers: [
    {
      provide: LIGHTBOX_CONFIG,
      useValue: {
        keyboardShortcuts: false
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }