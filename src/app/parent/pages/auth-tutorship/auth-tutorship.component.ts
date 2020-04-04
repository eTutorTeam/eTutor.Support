import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-auth-tutorship',
  templateUrl: './auth-tutorship.component.html',
  styleUrls: ['./auth-tutorship.component.scss']
})
export class AuthTutorshipComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  get videoUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/3ym0xsn-vNE');
  }

}
