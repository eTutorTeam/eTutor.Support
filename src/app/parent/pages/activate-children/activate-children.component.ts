import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-activate-children',
  templateUrl: './activate-children.component.html',
  styleUrls: ['./activate-children.component.scss']
})
export class ActivateChildrenComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  get videoUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/AXpFNOmAUIU');
  }

}
