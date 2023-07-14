import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isAuthenticated: boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.navigate(['auth/login']);
  }

}
