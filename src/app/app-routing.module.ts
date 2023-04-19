import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'videos', loadChildren: () => import('./video-slider/video-slider.module').then(m => m.VideoSliderModule), outlet: 'video-slider' },
  { path: 'events', loadChildren: () => import('./video-slider-lazy/video-slider-lazy.module').then(m => m.VideoSliderLazyModule), outlet: 'video-slider-lazy' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
