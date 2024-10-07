import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { ThemeService } from '../../../theme.service';
import { Subscription } from 'rxjs';

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
    protected currentTheme: string;
    private currentTheme$!: Subscription;
    constructor(private renderer: Renderer2, private themeService: ThemeService) {
        this.currentTheme = this.themeService.currentTheme$.value.split("-")[0];

    }

    private scriptUrl: string = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';

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
            symbol: this.ticker,
            width: 350,
            isTransparent: true,
            colorTheme: this.currentTheme,
            locale: "en"
        });

        this.renderer.setProperty(script, 'id', this.ticker);
        this.renderer.setProperty(script, 'src', this.scriptUrl);
        this.renderer.setProperty(script, 'async', true);
        this.renderer.setProperty(script, 'innerHTML', innerhtml);
        this.renderer.appendChild(this.container.nativeElement, script);
    }
}