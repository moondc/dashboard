import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Remarkable } from 'remarkable';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  md = new Remarkable();
  innerHTML: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    this.httpClient.get('assets/home.md', { responseType: 'text' }).subscribe((data: string) => {
      this.innerHTML = this.md.render(data);
    })
  }
}
