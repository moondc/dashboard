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
    const script = this.renderer.createElement('script');
    const innerhtml = JSON.stringify({
      "symbols": this.tickerList,
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
