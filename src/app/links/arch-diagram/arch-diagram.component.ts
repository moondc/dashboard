import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Remarkable } from 'remarkable';

@Component({
  selector: 'app-arch-diagram',
  standalone: true,
  imports: [],
  templateUrl: './arch-diagram.component.html',
  styleUrl: './arch-diagram.component.scss'
})
export class ArchDiagramComponent {
  md = new Remarkable();
  innerHTML: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    this.httpClient.get('assets/under_construction.md', { responseType: 'text' }).subscribe((data: string) => {
      this.innerHTML = this.md.render(data);
    })
  }
}
