import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environment';
import { Buffer } from 'buffer';

const apitoken = environment.apitoken;
const BusinessShortCode = 174379;

function generateTimestamp(): string {
  return new Date().toISOString().replace(/[-T:.Z]/g, '');
}

function generateEncodedCredentials(): string {
  const strToEncode = `${BusinessShortCode}${apitoken}${generateTimestamp()}`;
  const encodedStr = Buffer.from(strToEncode).toString('base64');
  return encodedStr;
}

@Injectable({
  providedIn: 'root'
})
export class MpesaService {
  private mpesaUrl = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
  private auth_token = generateEncodedCredentials();

  constructor(private http: HttpClient) { }

  sendPaymentRequest(amount: number, phoneNumber: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth_token
    });
    const body = {
      "BusinessShortCode": 174379,
      "Password": generateEncodedCredentials(),
      "Timestamp": generateTimestamp(),
      "TransactionType": "CustomerPayBillOnline",
      "Amount": amount,
      "PartyA": phoneNumber,
      "PartyB": 174379,
      "PhoneNumber": phoneNumber,
      "CallBackURL": "https://mydomain.com/path",
      "AccountReference": "CompanyXLTD",
      "TransactionDesc": "Payment of X"
    };
    const request = new HttpRequest('OPTIONS', this.mpesaUrl, body, {headers});
    if (request.method === 'OPTIONS') {
      const response = new HttpResponse({status: 200});
      response.headers.set('Access-Control-Allow-Origin', '*');
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
      console.log(generateTimestamp())
      return new Observable(observer => observer.next(response));
    } else {
      return this.http.post<any>(this.mpesaUrl, JSON.stringify(body), { headers });
    }
  }
  
}
