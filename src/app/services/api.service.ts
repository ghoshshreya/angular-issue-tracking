import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  get(url: string, params: any) {
    return this.http.get(url, { params });
  }

  post(url: string, data: any) {
    return this.http.post(url, data);
  }
}
