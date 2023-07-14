import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBannerComponent } from './message-banner/message-banner.component';

@NgModule({
  declarations: [
    MessageBannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MessageBannerComponent
  ]
})
export class SharedModule { }
