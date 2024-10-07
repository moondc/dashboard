import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { ThemeService } from '../../../theme.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-ticker-multi',
    standalone: true,
    imports: [],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './ticker-multi.component.html',
    styleUrl: './ticker-multi.component.scss'
})
export class TickerMultiComponent implements AfterViewInit {
    @Input() tickerList!: any;
    @ViewChild('container', { static: true }) container!: ElementRef;
    protected currentTheme: string;
    private currentTheme$!: Subscription;
    constructor(private renderer: Renderer2, private themeService: ThemeService) {
        this.currentTheme = this.themeService.currentTheme$.value.split("-")[0];
    }

    private scriptUrl: string = 'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js';

    ngOnInit() {
        this.currentTheme$ = this.themeService.currentTheme$.subscribe(next => {
            const newTheme = next.split('-')[0];
            if (newTheme !== this.currentTheme) {
                this.currentTheme = newTheme;
                location.reload();
            }
        })
    }

    ngOnDestroy() {
        this.currentTheme$.unsubscribe();
    }

    ngAfterViewInit() {
        this.loadScript();
    }

    private loadScript(): void {
        const script = this.renderer.createElement('script');
        const innerhtml = JSON.stringify({
            "symbols": this.tickerList,
            isTransparent: true,
            showSymbolLogo: true,
            colorTheme: this.currentTheme,
            locale: "en",
            displayMode: "compact"
        });

        this.renderer.setProperty(script, 'id', this.tickerList);
        this.renderer.setProperty(script, 'src', this.scriptUrl);
        this.renderer.setProperty(script, 'async', true);
        this.renderer.setProperty(script, 'innerHTML', innerhtml);
        this.renderer.appendChild(this.container.nativeElement, script);
    }
}