import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-directive',
  templateUrl: './ng-switch-directive.component.html',
  styleUrls: ['./ng-switch-directive.component.css']
})
export class NgSwitchDirectiveComponent implements OnInit {

  data: any = {};

  ngOnInit(): void {
    this.data = {
      name: 'James',
      isVisible: false,
      loggedIn: true,
      countryCode: 'UR'
    }
  }

}
