import { Component, OnInit } from '@angular/core';
import { ParentService } from '../services/parent/parent.service';
import { IndexItem } from '../models/index-item';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  indexItems: IndexItem[];

  constructor(private parentService: ParentService) { }

  ngOnInit(): void {
    this.parentService.getIndexItems().subscribe(
      resp => {
        this.indexItems = resp;
      }
    )
  }

}
