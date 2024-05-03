import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface MyData {
  // Define the structure of your expected data here
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  myData: MyData | undefined;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http
      .get<MyData>('/countries')
      .subscribe((data) => (this.myData = data));
  }
  title = 'frontend-angular';
}
