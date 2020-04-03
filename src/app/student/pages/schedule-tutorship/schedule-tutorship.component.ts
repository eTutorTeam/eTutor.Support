import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-schedule-tutorship',
  templateUrl: './schedule-tutorship.component.html',
  styleUrls: ['./schedule-tutorship.component.scss']
})
export class ScheduleTutorshipComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  get videoUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/6HXUMg74nRA');
  }

}
