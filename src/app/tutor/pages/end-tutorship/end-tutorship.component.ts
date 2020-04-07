import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-end-tutorship',
  templateUrl: './end-tutorship.component.html',
  styleUrls: ['./end-tutorship.component.scss']
})
export class EndTutorshipComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  get videoUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/rjuw20VGQz4');
  }

}
