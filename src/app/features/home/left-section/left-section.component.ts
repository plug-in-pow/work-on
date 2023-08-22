import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.scss']
})
export class LeftSectionComponent implements OnInit {

  menuTabs: any[] = [
    { id: "todo", icon: "format_list_bulleted", route: "todo", active: true },
    { id: "calender", icon: "event", route: "calender", active: false }
  ];
  otherTabs: any[] = [
    { id: "settings", icon: "tune", route: "settings", active: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onTabClick(id: string): void {
    this.menuTabs.forEach(tab => {
     tab.active = tab.id === id;
    }); 
    this.otherTabs.forEach(tab => {
      tab.active = tab.id === id;
    });
  }

}
