import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tutorial-item',
  templateUrl: './tutorial-item.component.html',
  styleUrls: ['./tutorial-item.component.scss']
})
export class TutorialItemComponent implements OnInit {

  @Input() title: string;
  @Input() link: string;

  constructor() { }

  ngOnInit(): void {
  }

}
