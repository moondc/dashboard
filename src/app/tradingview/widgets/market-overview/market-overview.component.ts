import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
    selector: 'app-market-overview',
    standalone: true,
    imports: [],
    templateUrl: './market-overview.component.html',
    styleUrl: './market-overview.component.scss'
})
export class MarketOverviewComponent implements AfterViewInit {
    @Input() tickerList!: any;
    @ViewChild('container', { static: true }) container!: ElementRef;

    constructor(private renderer: Renderer2) { }

    private scriptUrl: string = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';

    ngAfterViewInit() {
        this.loadScript();
    }

    private loadScript(): void {
        const script = this.renderer.createElement('script');
        const innerhtml = JSON.stringify({
            "tabs": this.tickerList,
            "colorTheme": "dark",
            "dateRange": "12M",
            "showChart": true,
            "locale": "en",
            "largeChartUrl": "",
            "isTransparent": true,
            "showSymbolLogo": true,
            "showFloatingTooltip": false,
            "width": "400",
            "height": "800",
            "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
            "plotLineColorFalling": "rgba(41, 98, 255, 1)",
            "gridLineColor": "rgba(240, 243, 250, 0)",
            "scaleFontColor": "rgba(106, 109, 120, 1)",
            "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
            "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
            "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
            "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
            "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
        });

        this.renderer.setProperty(script, 'id', this.tickerList);
        this.renderer.setProperty(script, 'src', this.scriptUrl);
        this.renderer.setProperty(script, 'async', true);
        this.renderer.setProperty(script, 'innerHTML', innerhtml);
        this.renderer.appendChild(this.container.nativeElement, script);
    }
}