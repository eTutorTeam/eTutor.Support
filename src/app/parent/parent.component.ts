import { Component, OnInit } from '@angular/core';
import { ParentService } from '../services/parent/parent.service';
import { IndexItem } from '../models/index-item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  indexItems: Observable<IndexItem[]>;

  constructor(private parentService: ParentService) { }

  ngOnInit(): void {
    this.indexItems = this.parentService.getIndexItems();
  }

}
