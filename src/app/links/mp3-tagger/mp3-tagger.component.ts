import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { DOMAIN } from '../../../environment';
import { ThemeService } from '../../theme.service';

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
  themeService: ThemeService = inject(ThemeService);
  currentTheme: string = '';

  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://" + DOMAIN + "/mp3-tagger");
  }

  @ViewChild('iframeElement', { static: false }) iframe!: ElementRef;
  ngAfterViewInit() {
    const iframe = this.iframe.nativeElement as HTMLIFrameElement;

    iframe.onload = () => {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDoc) {
        this.themeService.currentTheme$.subscribe((next: string) => {
          if (this.currentTheme) {
            iframeDoc.body.classList.remove(this.currentTheme);
          }
          iframeDoc.body.classList.add(next);
          this.currentTheme = next;
        })
      }
    };
  }
}
