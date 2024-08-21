import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { DOMAIN } from '../../../environment';

@Component({
  selector: 'app-mp3-tagger',
  standalone: true,
  imports: [],
  templateUrl: './mp3-tagger.component.html',
  styleUrl: './mp3-tagger.component.scss'
})
export class Mp3TaggerComponent implements AfterViewInit {
  url!: SafeUrl;
  sanitizer: DomSanitizer = inject(DomSanitizer);

  ngOnInit() {
    // this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://" + DOMAIN + "/mp3-tagger");
  }

  @ViewChild('iframeElement', { static: false }) iframe!: ElementRef;
  ngAfterViewInit() {
    const iframe = this.iframe.nativeElement as HTMLIFrameElement;

    iframe.onload = () => {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDoc) {
        // Copy all <style> and <link> elements from the parent document
        const parentStyles = document.querySelectorAll('style, link[rel="stylesheet"]');
        parentStyles.forEach(style => {
          iframeDoc.body.appendChild(style.cloneNode(true));
        });

        // Example: Adding a class to the iframe's body
        iframeDoc.body.classList.add('b');
      }
    };
  }
}
