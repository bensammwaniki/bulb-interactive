import { Component } from '@angular/core';
import { MpesaService } from '../../mpesa.service';

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
      error => console.log(error)
    );
  }
}