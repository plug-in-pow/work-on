import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-message-banner',
  templateUrl: './message-banner.component.html',
  styleUrls: ['./message-banner.component.scss']
})
export class MessageBannerComponent implements OnInit, OnChanges {

  @Input() bannerInfo: { message: string; showBanner: boolean } = {
    "message": '',
    "showBanner": false
  }

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit(): void {
  }

  close() {
    this.bannerInfo.showBanner = false;
  }

}
