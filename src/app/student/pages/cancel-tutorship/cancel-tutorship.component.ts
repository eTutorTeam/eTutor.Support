import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cancel-tutorship',
  templateUrl: './cancel-tutorship.component.html',
  styleUrls: ['./cancel-tutorship.component.scss']
})
export class CancelTutorshipComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  get videoUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/WC44BowpXc4');
  }

}
