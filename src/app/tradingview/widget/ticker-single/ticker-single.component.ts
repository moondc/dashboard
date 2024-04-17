import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ticker-single',
  standalone: true,
  imports: [],
  templateUrl: './ticker-single.component.html',
  styleUrl: './ticker-single.component.scss'
})
export class TickerSingleComponent implements AfterViewInit {
  @Input() ticker!: string;
  @ViewChild('container', { static: true }) container!: ElementRef;

  constructor(private renderer: Renderer2) { }

  private scriptUrl: string = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';

  ngAfterViewInit() {
    this.loadScript();
  }

  private loadScript(): void {
    const script = this.renderer.createElement('script');
    const innerhtml = JSON.stringify({
      symbol: this.ticker,
      width: 350,
      isTransparent: false,
      colorTheme: "light",
      locale: "en"
    });

    this.renderer.setProperty(script, 'id', this.ticker);
    this.renderer.setProperty(script, 'src', this.scriptUrl);
    this.renderer.setProperty(script, 'async', true);
    this.renderer.setProperty(script, 'innerHTML', innerhtml);
    this.renderer.appendChild(this.container.nativeElement, script);
  }
}