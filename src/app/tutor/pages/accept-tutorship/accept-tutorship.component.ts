import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-accept-tutorship',
  templateUrl: './accept-tutorship.component.html',
  styleUrls: ['./accept-tutorship.component.scss']
})
export class AcceptTutorshipComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }
  get videoUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/CPY_pt8C5Gg');
  }

}
