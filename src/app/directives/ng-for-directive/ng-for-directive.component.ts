import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  templateUrl: './ng-for-directive.component.html',
  styleUrls: ['./ng-for-directive.component.css']
})
export class NgForDirectiveComponent implements OnInit {

  processors: any = [];

  ngOnInit(): void {
    this.processors = [
      {
        SerialNumber: 354,
        ProductId: 675,
        ProductName: "AMD Ryzen 5 5600X",
        SoldUnits: 10,
        InStockUnit: 20,
        Cost: 12.5
      },
      {
        SerialNumber: 123,
        ProductId: 987,
        ProductName: "AMD Ryzen 7 5800X",
        SoldUnits: 15,
        InStockUnit: 25,
        Cost: 20.75
      },
      {
        SerialNumber: 789,
        ProductId: 456,
        ProductName: "AMD Ryzen 9 5900X",
        SoldUnits: 20,
        InStockUnit: 30,
        Cost: 8.99
      },
      {
        SerialNumber: 234,
        ProductId: 890,
        ProductName: "AMD Ryzen Threadripper 3970X",
        SoldUnits: 25,
        InStockUnit: 35,
        Cost: 15.25
      },
      {
        SerialNumber: 567,
        ProductId: 123,
        ProductName: "AMD Ryzen 3 3300X",
        SoldUnits: 30,
        InStockUnit: 40,
        Cost: 18.49
      },
      {
        SerialNumber: 901,
        ProductId: 234,
        ProductName: "AMD Ryzen 5 3600",
        SoldUnits: 35,
        InStockUnit: 45,
        Cost: 22.99
      },
      {
        SerialNumber: 432,
        ProductId: 567,
        ProductName: "AMD Ryzen 7 3700X",
        SoldUnits: 40,
        InStockUnit: 50,
        Cost: 11.75
      },
      {
        SerialNumber: 876,
        ProductId: 345,
        ProductName: "AMD Ryzen 9 3900X",
        SoldUnits: 45,
        InStockUnit: 55,
        Cost: 16.85
      },
      {
        SerialNumber: 789,
        ProductId: 678,
        ProductName: "AMD Ryzen 5 2600",
        SoldUnits: 50,
        InStockUnit: 60,
        Cost: 19.99
      },
      {
        SerialNumber: 345,
        ProductId: 901,
        ProductName: "AMD Ryzen 7 2700X",
        SoldUnits: 55,
        InStockUnit: 65,
        Cost: 14.5
      }
    ];

  }

}
