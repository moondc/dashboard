import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TickerSingleComponent } from '../../tradingview/widgets/ticker-single/ticker-single.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-new-market',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, TickerSingleComponent, MatIconModule],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.scss'
})
export class WatchlistComponent {
  tickerField: string = "NYSE:GME";
  tickers: any[];

  constructor() {
    this.tickers = [];
    const data = localStorage.getItem('data');
    if (data) {
      this.tickers = JSON.parse(data);
    }
  }

  addTicker() {
    this.tickers.push(this.tickerField);
    const data = JSON.stringify(this.tickers);
    localStorage.setItem("data", data);
  }

  //@ts-ignore
  onIconClick(event, ticker) {
    const index = this.tickers.indexOf(ticker);
    this.tickers.splice(index, 1);
    const data = JSON.stringify(this.tickers);
    localStorage.setItem("data", data);
  }
}
