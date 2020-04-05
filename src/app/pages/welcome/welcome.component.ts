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
        text: 'Padre',
        iconName: 'fas fa-user-tie',
        url: '/parent'
      },
      {
        text: 'Tutor',
        iconName: 'fas fa-chalkboard-teacher',
        url: '/tutor'
      },
      {
        text: 'Estudiante',
        iconName: 'fas fa-book-reader',
        url: '/student'
      }
    ];
  }

}
