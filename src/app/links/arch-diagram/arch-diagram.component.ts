import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ARCHITECTURE_DIAGRAM } from '../../../environment';

@Component({
  selector: 'app-arch-diagram',
  standalone: true,
  imports: [],
  templateUrl: './arch-diagram.component.html',
  styleUrl: './arch-diagram.component.scss'
})
export class ArchDiagramComponent {
  url!: SafeResourceUrl;
  sanitizer: DomSanitizer = inject(DomSanitizer);

  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(`https://embed.diagrams.net/?embed=1&spin=1&modified=0&proto=json`);
    window.addEventListener('message', this.message.bind(this))
  }

  message(event: any) {
    {
      console.log(event);
      if (event.data.length > 0) {
        var msg = JSON.parse(event.data);

        if (msg.event == 'init') {
          this.httpClient.get(ARCHITECTURE_DIAGRAM, { responseType: 'text' }).subscribe(next => {
            console.log(next);
            event.source.postMessage(JSON.stringify(
              { action: 'load', xml: next }), '*');
          })
        }
      }
    };
  }
}
