import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-start-tutorship',
  templateUrl: './start-tutorship.component.html',
  styleUrls: ['./start-tutorship.component.scss']
})
export class StartTutorshipComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  get videoUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/7DO8OsiSEM0');
  }

}
