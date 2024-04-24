import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private backendUrl: string = 'http://localhost:3000'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  getCountries(): Observable<any> {
    const customHostHeader = 'custom-host-header.example.com'; // Replace with your desired custom Host header value

    const headers = new HttpHeaders({
      'Host': customHostHeader,
      // Add other headers if needed
    });

    return this.http.get<any>(`${this.backendUrl}/countries`, { headers });
  }
}
