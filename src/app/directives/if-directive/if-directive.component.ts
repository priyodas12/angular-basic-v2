import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-directive',
  templateUrl: './if-directive.component.html',
  styleUrls: ['./if-directive.component.css']
})
export class IfDirectiveComponent implements OnInit {

  data: any = {};

  ngOnInit(): void {
    this.data = {
      name: 'James',
      isVisible: false,
      loggedIn: false,
      countryCode: 'UK'
    }
  }
}
