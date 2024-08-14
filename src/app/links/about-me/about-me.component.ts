import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Remarkable } from 'remarkable';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  md = new Remarkable();
  innerHTML: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    this.httpClient.get('assets/under_construction.md', { responseType: 'text' }).subscribe((data: string) => {
      this.innerHTML = this.md.render(data);
    })
  }
}
