import { Component, inject } from '@angular/core';
import { DOMAIN } from '../../../environment';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-verdaccio',
  standalone: true,
  imports: [],
  templateUrl: './verdaccio.component.html',
  styleUrl: './verdaccio.component.scss'
})
export class VerdaccioComponent {
  url!: SafeUrl;
  sanitizer: DomSanitizer = inject(DomSanitizer);

  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://" + DOMAIN + "/verdaccio");
  }
}
