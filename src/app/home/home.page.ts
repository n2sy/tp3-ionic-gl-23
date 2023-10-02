import { Component } from '@angular/core';
import { ExchangeService } from '../exchange.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  allCurrencies = [];
  msg = '';
  constructor(private exchange: ExchangeService) {}

  ngOnInit() {
    this.exchange.getAllValues().subscribe({
      next: (data) => {
        console.log(data['quotes']); //data.quotes
        for (const element in data['quotes']) {
          this.allCurrencies.push(element.slice(-3));
        }
        console.log(this.allCurrencies);
      },
    });
  }

  onChange(c2Value) {
    console.log(c2Value);
    this.exchange.getAllValues().subscribe({
      next: (data) => {
        console.log(data['quotes']); //data.quotes
        let req = `USD${c2Value}`;
        this.msg = `Today, 1 USD worths ${data['quotes'][req]} ${c2Value}`;
      },
    });
  }
}
