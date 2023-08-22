import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-banner',
  templateUrl: './message-banner.component.html',
  styleUrls: ['./message-banner.component.scss']
})
export class MessageBannerComponent implements OnInit {

  @Input() bannerInfo: { message: string; showBanner: boolean } = {
    "message": '',
    "showBanner": false
  }

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.bannerInfo.showBanner = false;
  }

}
