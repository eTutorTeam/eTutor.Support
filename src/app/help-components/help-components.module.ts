import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpItemComponent } from './help-item/help-item.component';



@NgModule({
  declarations: [
    HelpItemComponent
  ],
  exports: [
    HelpItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HelpComponentsModule { }
