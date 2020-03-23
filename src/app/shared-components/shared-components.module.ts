import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from './background/background.component';
import { RoleHomeComponent } from './role-home/role-home.component';
import { RouterModule } from '@angular/router';


const components = [
  BackgroundComponent,
  RoleHomeComponent
];
@NgModule({
  entryComponents: [
    ...components
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedComponentsModule { }
