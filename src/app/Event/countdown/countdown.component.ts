import { Component, ElementRef } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent {
  private future: Date = new Date();
  private futureString: string = '';
  private diff: number = 0;
  private $counter: Observable<number> = new Observable();
  private subscription: Subscription = new Subscription();
  private message: string = '';

  constructor(elm: ElementRef) {
    this.futureString = '2023-07-13T20:00:00';
  }

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  dhms(t: number) {
    let days, hours, minutes, seconds;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;
    seconds = t % 60;

    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;

    return [
      days + 'd',
      hours + 'h',
      minutes + 'm',
      seconds + 's'
    ].join(' ');
  }

  ngOnInit() {
    this.future = new Date(this.futureString);
    this.$counter = interval(1000).pipe(
      takeWhile(() => this.diff >= 0),
    );

    this.subscription = this.$counter.subscribe(() => {
      this.diff = Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
      if (this.diff >= 0) {
        this.message = this.dhms(this.diff);
      } else {
        this.message = 'Sorry time is up!';
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
