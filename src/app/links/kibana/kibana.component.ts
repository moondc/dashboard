import { Component, inject } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { DOMAIN } from '../../../environment';

@Component({
  selector: 'app-kibana',
  standalone: true,
  imports: [],
  templateUrl: './kibana.component.html',
  styleUrl: './kibana.component.scss'
})
export class KibanaComponent {
  url!: SafeUrl;
  sanitizer: DomSanitizer = inject(DomSanitizer);

  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://" + DOMAIN + "/kibana");
  }
}
