import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Remarkable } from 'remarkable';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  md = new Remarkable();
  innerHTML: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    this.httpClient.get('assets/under_construction.md', { responseType: 'text' }).subscribe((data: string) => {
      this.innerHTML = this.md.render(data);
    })
  }
}
