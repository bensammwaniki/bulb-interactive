import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GalleryModule } from  'ng-gallery';
import { LightboxModule } from  'ng-gallery/lightbox';
import { LIGHTBOX_CONFIG } from 'ng-gallery/lightbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { LightgalleryModule } from 'lightgallery/angular';
import { LoadingInterceptor } from './loading.interceptor';
import { SlickCarouselModule } from 'ngx-slick-carousel';


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
import { BrandingComponent } from './Branding/branding/branding.component';
import { AboutComponent } from './Branding/about/about.component';
import { PackagesComponent } from './Branding/packages/packages.component';
import { ContainerComponent } from './Branding/container/container.component';
import { AboutTvComponent } from './Home/about-tv/about-tv.component';
import { ImageGalleryComponent } from './Shared/image-gallery/image-gallery.component';
import { SpinnerComponent } from './Shared/spinner/spinner.component';
import { CountdownComponent } from './Event/countdown/countdown.component';
import { AllvideosComponent } from './Gallery/allvideos/allvideos.component';
import { NotfoundComponent } from './Shared/notfound/notfound.component';
import { BlogPostComponent } from './Shared/blog-post/blog-post.component';

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
    BrandingComponent,
    AboutComponent,
    PackagesComponent,
    ContainerComponent,
    AboutTvComponent,
    ImageGalleryComponent,
    SpinnerComponent,
    CountdownComponent,
    AllvideosComponent,
    NotfoundComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    GalleryModule,
    LightboxModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ShareButtonsModule,
    ShareIconsModule,
    LightgalleryModule,
    RouterModule.forRoot([
      { path: '', 
        redirectTo: 'home', 
        pathMatch: 'full'
      },
      {
        path:'home',
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
      { path: 'blog/:id', component: BlogPostComponent },
      {
        path:'**',
        component: NotfoundComponent
      },

    ])
  ],
  providers: [
    {
      provide: LIGHTBOX_CONFIG,
      useValue: {
        keyboardShortcuts: false
      },
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }