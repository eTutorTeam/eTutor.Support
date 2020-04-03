import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tutorship-detail',
  templateUrl: './tutorship-detail.component.html',
  styleUrls: ['./tutorship-detail.component.scss']
})
export class TutorshipDetailComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  get videoUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/U1enM25kl1w');
  }

}
