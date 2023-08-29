import { Component,HostListener,ElementRef, Renderer2 } from '@angular/core';
import { MpesaService } from '../../mpesa.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  private _amount = 1;
  phoneNumber: number=0;
  disp: number =2500;

  constructor(private mpesaService: MpesaService, private renderer: Renderer2) {}
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

// Styling the nav bar using funtions\\
//===================================\\
  // onScroll(): void {
  //   this.isScrolled = window.pageYOffset > 130;
  // }
  
  hideNavbar(): void {
    const navbartoggle = document.getElementById('navdiv');
    this.renderer.addClass(navbartoggle, 'nav_hide');
  }
  
  openNav(): void{
    const mySidenav = document.getElementById("navdiv");
    this.renderer.setStyle(mySidenav, 'width', '60%');
    this.renderer.removeClass(mySidenav, 'nav_hide');
  }
  closeNav(): void{
    const sidenav = document.getElementById("navdiv");
    if (sidenav) {
      sidenav.style.width = "0%";
    }
  }
  getVal(){
    const val = this.amount * 2500;
    return val
  }
}