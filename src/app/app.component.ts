import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TickerSingleComponent } from './tradingview/widget/ticker-single/ticker-single.component';
import { TickerMultiComponent } from './tradingview/widget/ticker-multi/ticker-multi.component';
import { TICKERS } from './constants';
import { MarketOverviewComponent } from './tradingview/widget/market-overview/market-overview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TickerSingleComponent, TickerMultiComponent, MarketOverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard';
  commodities = [{
    "proName":"TVC:GOLD",
    "title":"Gold"
  },{
    "proName":"TVC:SILVER",
    "title":"Silver"
  }]
  mag1 = [{
    "proName":"NASDAQ:NVDA",
    "title":"Nvidia"
  },{
    "proName":"NASDAQ:GOOGL",
    "title":"Google"
  },{
    "proName":"NASDAQ:AAPL",
    "title":"Apple"
  },{
    "proName":"NASDAQ:AMZN",
    "title":"Amazon"
  }
]

  mag2 = [{
    "proName":"NASDAQ:MSFT",
    "title":"Microsoft"
  },{
    "proName":"NASDAQ:META",
    "title":"Meta"
  },{
    "proName":"NASDAQ:TSLA",
    "title":"Tesla"
  }]
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
  }, {
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
  }, {
    "proName": "NYSE:STAG",
    "title": "Stag Industrial"
  }, {
    "proName": "NASDAQ:GLAD",
    "title": "Gladstone Capital"
  }, {
    "proName": "NYSE:SCM",
    "title": "Stellus Capital"
  }];
  other2 = [{
    "proName": "NYSE:T",
    "title": "AT&T"
  },{
    "proName":"NYSE:BA",
    "title":"Boeing"
  }];

  marketview = [{
    "title": "Banks",
    "symbols": [
      {
        "s": TICKERS.JP_MORGAN.proName,
        "d": TICKERS.JP_MORGAN.title
      },
      {
        "s": TICKERS.WELLS_FARGO.proName,
        "d": TICKERS.WELLS_FARGO.title
      },
      {
        "s": TICKERS.BANK_OF_AMERICA.proName,
        "d": TICKERS.BANK_OF_AMERICA.title
      },
      {
        "s": TICKERS.GOLDMAN_SACS.proName,
        "d": TICKERS.GOLDMAN_SACS.title
      },
      {
        "s": TICKERS.MORGAN_STANLEY.proName,
        "d": TICKERS.MORGAN_STANLEY.title
      },
      {
        "s": TICKERS.CITI.proName,
        "d": TICKERS.CITI.title
      },
      {
        "s": TICKERS.US_BANK.proName,
        "d": TICKERS.US_BANK.title
      },
      {
        "s": TICKERS.PNC.proName,
        "d": TICKERS.PNC.title
      },
      {
        "s": TICKERS.FIFTH_THIRD.proName,
        "d": TICKERS.FIFTH_THIRD.title
      },
      {
        "s": TICKERS.NEW_YORK_COMMUNITY_BANK.proName,
        "d": TICKERS.NEW_YORK_COMMUNITY_BANK.title
      }
    ],
    "originalTitle": "Banks"
  },]
}

