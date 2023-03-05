import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environment';

const apiKey = environment.apiKey;
const apitoken = environment.apitoken;


function generateTimestamp(): string {
  const now = new Date();
  const year = now.getFullYear().toString().padStart(4, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  
  return `${year}${month}${day}${hours}${minutes}${seconds}`;
}


@Injectable({
  providedIn: 'root'
})
export class MpesaService {
  private mpesaUrl = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
  private auth_token = apitoken;

  constructor(private http: HttpClient) { }

  sendPaymentRequest(amount: number, phoneNumber: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth_token,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    });
    const body = {
      "BusinessShortCode": 174379,
      "Password": apiKey,
      "Timestamp": generateTimestamp(),
      "TransactionType": "CustomerPayBillOnline",
      "Amount": amount,
      "PartyA": phoneNumber,
      "PartyB": 174379,
      "PhoneNumber": phoneNumber,
      "CallBackURL": "*",
      "AccountReference": "CompanyXLTD",
      "TransactionDesc": "Payment of X"
    };
    console.log(headers);
    return this.http.post<any>(this.mpesaUrl, JSON.stringify(body), { headers });
  }
}

