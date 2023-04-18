import { Component,HostListener  } from '@angular/core';
import { MpesaService } from '../../mpesa.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  amount: number=0;
  phoneNumber: number=0;

  constructor(private mpesaService: MpesaService) { }

  onSubmit() {
    this.mpesaService.sendPaymentRequest(this.amount, this.phoneNumber).subscribe(
      response => console.log(response),
      error => console.log(error),
    );
  }
  isScrolled = false;

  @HostListener('window:scroll', [])

  // Styling the nav bar using funtions//
//=======================================//
  onScroll(): void {
    this.isScrolled = window.pageYOffset > 0;
  }
  hideNavbar(): void {
    $('#navbartoggle').addClass("hide");
    $('#navbartoggle').removeClass("show");
  }
  togg(): void{
    $('#ico').removeClass("navbar-toggler-icon").addClass("btn-close");
  }
}