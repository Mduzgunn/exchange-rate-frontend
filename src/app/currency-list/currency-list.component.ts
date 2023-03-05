import { Component, OnInit } from '@angular/core';
import { Currency } from '../model/currency';
import { CurrencyService } from '../service/currency.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent {

  currencys: Currency[];
  SelectedDate: any;
  maxDate: string;  

  constructor(private currencyService: CurrencyService) {
    // bugünden sonraki tarihleri devre dışı bırakıyoruz
    const today = new Date();
    today.setDate(today.getDate());
    this.maxDate = today.toISOString().slice(0, 10); // max özelliğine atamak için yyyy-MM-dd biçiminde tarih dizesi oluşturduk
  }

  getCurrency() {
    if (!this.SelectedDate) {
      alert("Lütfen geçerli bir tarih seçin");
      return;
    }
   
    console.log(this.SelectedDate);
    this.currencyService.findAll(this.SelectedDate).subscribe(
      (data: Currency[]) => {
      this.currencys = data;
    },
    (error) => {
      if (error.status === 400 || error.status === 500) {
        alert("Lütfen geçerli bir tarih seçin");
      } else {
        console.error(error);
      }
    }
    
    );
  }
}