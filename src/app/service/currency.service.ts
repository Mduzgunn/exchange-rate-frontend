import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Currency } from '../model/currency';

@Injectable()
export class CurrencyService {

  private currencysUrl: string;
  
  constructor(private http: HttpClient) {
    this.currencysUrl = ('http://localhost:8080/v1/api/list');
  }

  public findAll(date: string): Observable<Currency[]> {
    const url = `${this.currencysUrl}/${date}`;
    return this.http.get<Currency[]>(url);
  }

  /*public save(currency: Currency) {
    return this.http.post<Currency>(this.currencysUrl, currency);
  }*/
  
}