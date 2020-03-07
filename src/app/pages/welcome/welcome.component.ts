import { Component, OnInit } from '@angular/core';
import { HelpItem } from 'src/app/models/help-item';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  helpItems: HelpItem[] = [];

  constructor() { }

  ngOnInit() {
    this.helpItems = [
      {
        text: 'Padres',
        iconName: 'book'
      },
      {
        text: 'Tutores',
        iconName: 'mobile'
      },
      {
        text: 'Estudiantes',
        iconName: 'smile'
      }
    ];
  }

}
