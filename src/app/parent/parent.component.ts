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

  title: string;
  indexItems: Observable<IndexItem[]>;
  roleDescription: Array<string>;

  constructor(private parentService: ParentService) { }

  ngOnInit(): void {
    this.title = 'Padres';
    this.indexItems = this.parentService.getIndexItems();
    this.roleDescription = [
      // tslint:disable-next-line: max-line-length
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores porro tempora accusamus enim magni velit dolorum sequi assumenda, sunt unde repellat facere voluptas aspernatur officiis corporis perspiciatis, eius quas natus.'
    ];
  }

}
