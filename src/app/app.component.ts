import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TickerSingleComponent } from './tradingview/widget/ticker-single/ticker-single.component';
import { TickerMultiComponent } from './tradingview/widget/ticker-multi/ticker-multi.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TickerSingleComponent, TickerMultiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard';
  banks1 = [{
    "proName": "NYSE:JPM",
    "title": "JP Morgan"
  }, {
    "proName": "NYSE:WFC",
    "title": "Wells Fargo"
  }, {
    "proName": "NYSE:BAC",
    "title": "BofA"
  }, {
    "proName": "NYSE:GS",
    "title": "Goldman Sacs"
  }];
  banks2 = [{
    "proName": "NYSE:MS",
    "title": "Morgan Stanley"
  }, {
    "proName": "NYSE:C",
    "title": "Citi"
  }, {
    "proName": "NYSE:USB",
    "title": "US Bank"
  }, {
    "proName": "NYSE:PNC",
    "title": "PNC"
  }];
  banks3 = [{
    "proName": "NASDAQ:FITB",
    "title": "Fifth Third"
  }, {
    "proName": "NYSE:NYCB",
    "title": "New York Community Bank"
  }];
  memes = [{
    "proName": "NYSE:AMC",
    "title": "AMC"
  }, {
    "proName": "NYSE:GME",
    "title": "Gamestop"
  }, {
    "proName": "NASDAQ:HYMC",
    "title": "Hycroft Mining"
  }];
  crypto1 = [{
    "proName": "COINBASE:BTCUSD",
    "title": "Bitcoin"
  }, {
    "proName": "COINBASE:ETHUSD",
    "title": "Etherium"
  }, {
    "proName": "COINBASE:DOGEUSD",
    "title": "Doge"
  },{
    "proName": "COINBASE:ADAUSD",
    "title": "Cardano"
  }];
  crypto2 = [{
    "proName": "COINBASE:CLVUSD",
    "title": "Clover"
  }];
  other1 = [{
    "proName": "NASDAQ:AGNC",
    "title": "AGNC Investments"
  },{
    "proName": "NYSE:STAG",
    "title": "Stag Industrial"
  },{
    "proName": "NASDAQ:GLAD",
    "title": "Gladstone Capital"
  },{
    "proName": "NYSE:SCM",
    "title": "Stellus Capital"
  }];
  other2 = [{
    "proName": "NYSE:T",
    "title": "AT&T"
  }];
}

