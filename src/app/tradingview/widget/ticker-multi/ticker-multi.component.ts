import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ticker-multi',
  standalone: true,
  imports: [],
  templateUrl: './ticker-multi.component.html',
  styleUrl: './ticker-multi.component.scss'
})
export class TickerMultiComponent implements AfterViewInit {
  @Input() tickerList!: any;
  @ViewChild('container', { static: true }) container!: ElementRef;

  constructor(private renderer: Renderer2) { }

  private scriptUrl: string = 'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js';

  ngAfterViewInit() {
    this.loadScript();
  }

  private loadScript(): void {
    this.tickerList = [{
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
    const script = this.renderer.createElement('script');
    const innerhtml = JSON.stringify({
      "symbols": [
        {"proName": "FOREXCOM:SPXUSD", "title": "S&P 500 Index"},
        {"proName": "FOREXCOM:NSXUSD", "title": "US 100 Cash CFD"},
        {"proName": "FX_IDC:EURUSD", "title": "EUR to USD"},
        {"proName": "BITSTAMP:BTCUSD", "title": "Bitcoin"},
        {"proName": "BITSTAMP:ETHUSD", "title": "Ethereum"}
      ],
      isTransparent: false,
      showSymbolLogo: true,
      colorTheme: "light",
      locale: "en"
    });

    this.renderer.setProperty(script, 'id', this.tickerList);
    this.renderer.setProperty(script, 'src', this.scriptUrl);
    this.renderer.setProperty(script, 'async', true);
    this.renderer.setProperty(script, 'innerHTML', innerhtml);
    this.renderer.appendChild(this.container.nativeElement, script);
  }
}
