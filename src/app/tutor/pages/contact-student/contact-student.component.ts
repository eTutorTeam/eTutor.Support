import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-student',
  templateUrl: './contact-student.component.html',
  styleUrls: ['./contact-student.component.scss']
})
export class ContactStudentComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  get videoUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/o13hwgDXsW8');
  }

}
