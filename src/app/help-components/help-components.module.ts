import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpItemComponent } from './help-item/help-item.component';
import { NzIconModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [
    HelpItemComponent
  ],
  exports: [
    HelpItemComponent
  ],
  imports: [
    CommonModule,
    NzIconModule
  ]
})
export class HelpComponentsModule { }
