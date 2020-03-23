import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IndexItem } from 'src/app/models/index-item';

@Component({
  selector: 'app-role-home',
  templateUrl: './role-home.component.html',
  styleUrls: ['./role-home.component.scss']
})
export class RoleHomeComponent implements OnInit {

  @Input() title: string;
  @Input() indexItems: Observable<IndexItem>;
  @Input() roleDescription: Array<string>;

  constructor() { }

  ngOnInit(): void {
  }

}
