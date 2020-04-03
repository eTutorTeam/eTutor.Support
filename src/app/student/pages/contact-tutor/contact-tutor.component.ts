import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-tutor',
  templateUrl: './contact-tutor.component.html',
  styleUrls: ['./contact-tutor.component.scss']
})
export class ContactTutorComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  get videoUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/LJuwNc8q38Y');
  }

}
