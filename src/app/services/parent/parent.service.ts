import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IndexItem } from 'src/app/models/index-item';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http: HttpClient) { }

  getIndexItems() {
    return this.http.get<IndexItem[]>('../assets/data/parent.json');
  }
}
