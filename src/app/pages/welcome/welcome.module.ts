import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { HelpComponentsModule } from 'src/app/help-components/help-components.module';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd';


@NgModule({
  imports: [WelcomeRoutingModule, HelpComponentsModule, CommonModule, NzGridModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
