import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'videos', loadChildren: () => import('./video-slider/video-slider.module').then(m => m.VideoSliderModule), outlet: 'video-slider' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
