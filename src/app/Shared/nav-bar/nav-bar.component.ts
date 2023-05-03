import { Component,HostListener  } from '@angular/core';
import { MpesaService } from '../../mpesa.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  private _amount = 0;
  phoneNumber: number=0;
  disp: number =2500;

  constructor(private mpesaService: MpesaService) {}
  get amount() {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
    this.disp = this.getVal();
  }
  onSubmit() {
    let tkt = this.amount;
    const calc = () => {let ticket = tkt * 2500; return ticket;};

    this.mpesaService.sendPaymentRequest(calc(), this.phoneNumber).subscribe(
      response => console.log(response),
      error => console.log(error),
    );
  }
  isScrolled = false;

  @HostListener('window:scroll', [])

  // Styling the nav bar using funtions//
//=======================================//
  onScroll(): void {
    this.isScrolled = window.pageYOffset > 130;
  }
  hideNavbar(): void {
    $('#navbartoggle').addClass("hide");
    $('#navbartoggle').removeClass("show");
  }
  togg(): void{
    $('#ico').removeClass("navbar-toggler-icon").addClass("btn-close");
  }
  getVal(){
    const val = this.amount * 2500;
    return val
  }
}