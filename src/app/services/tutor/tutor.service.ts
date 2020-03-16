import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IndexItem } from 'src/app/models/index-item';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  constructor(private http: HttpClient) { }

  getIndexItems() {
    return this.http.get<IndexItem[]>('../assets/data/tutor.json');
  }
}
