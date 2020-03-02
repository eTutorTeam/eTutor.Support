import { Component, OnInit, Input } from '@angular/core';
import { HelpItem } from 'src/app/models/help-item';

@Component({
  selector: 'app-help-item',
  templateUrl: './help-item.component.html',
  styleUrls: ['./help-item.component.scss']
})
export class HelpItemComponent implements OnInit {

  @Input() helpItem: HelpItem;

  constructor() { }

  ngOnInit(): void {
  }

}
