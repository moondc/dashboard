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
  }]
}

