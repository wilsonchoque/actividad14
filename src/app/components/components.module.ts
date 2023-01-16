import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HijoComponent } from './hijo/hijo.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HijoComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    HeaderComponent,
    HijoComponent
  ],
})
export class ComponentsModule { }
