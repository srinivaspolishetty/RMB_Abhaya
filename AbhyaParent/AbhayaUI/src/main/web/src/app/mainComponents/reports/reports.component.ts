import { Component, OnInit } from '@angular/core';
import { reportsModel } from '../../common/models/reports-model';
import { DriversService } from '../../common/services/driversServiceApi';
import { environment } from './../../../environments/environment';
import { PageModel } from "../../common/models/page.model";
import { PieChart } from "../../common/models/piechart.model";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.sass']
})
export class ReportsComponent implements OnInit {


  name = 'Angular';
  // single: any[];
  // multi: any[];
























   single = [
    {
      "name": "Web",
      "value": 10
    },
    {
      "name": "Mobile",
      "value": 5
    },
    {
      "name": "Device",
      "value": 12
    },
    {
      "name": "fourth",
      "value": 12
    },
    {
      "name": "fifth",
      "value": 12
    },
    {
      "name": "sixth",
      "value": 12
    },
    {
      "name": "seventh",
      "value": 12
    } 
  ];

  





 
 multi = [
    {
      "name": "24-07-2019",
      "series": [
        {
          "name": "00:00",
          "value": 0
        },
        {
          "name": "00:30",
          "value": 18
        },
        {
          "name": "01:00",
          "value": 10
        },
        {
          "name": "01:30",
          "value": 18
        }
      ]
    },
  
    {
      "name": "25-07-2019",
      "series": [
        {
          "name": "00:00",
          "value": 0
        },
        {
          "name": "00:30",
          "value": 6
        },
        {
          "name": "01:00",
          "value": 10
        },
        {
          "name": "01:30",
          "value": 10
        },
        {
          "name": "02:00",
          "value": 10
        },
        {
          "name": "02:30",
          "value": 10
        },
        {
          "name": "01:00",
          "value": 10
        },
        {
          "name": "01:00",
          "value": 10
        },
        {
          "name": "01:00",
          "value": 10
        },
        {
          "name": "01:00",
          "value": 10
        },
        {
          "name": "01:00",
          "value": 10
        },
        {
          "name": "01:00",
          "value": 10
        },
        {
          "name": "01:00",
          "value": 10
        },
        {
          "name": "01:00",
          "value": 10
        },
        {
          "name": "01:00",
          "value": 10
        },
        {
          "name": "01:00",
          "value": 10
        },
        {
          "name": "01:00",
          "value": 10
        },
        {
          "name": "01:00",
          "value": 10
        },
        {
          "name": "01:00",
          "value": 10
        },
        {
          "name": "01:00",
          "value": 10
        },
        {
          "name": "01:00",
          "value": 10
        },




        {
          "name": "01:30",
          "value": 16
        }
      ]
    }
  ];

  
















  view: any[] = [800, 200];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = '';
  yAxisLabel = 'No of Panics';
  autoScale;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };






  pieChart: PieChart = new PieChart([205, 205], true, false, false, false, false, 'below', '0.38', '');


  constructor(private reportsApi: DriversService) {
    this.pieChart.colorScheme = { domain: ['#00ff00', '#ff0000'] };
    Object.assign(this, { })
   }
  driverDetails : Array<reportsModel> = []; //driversModel;
  pageSizeValues = [10, 50, 100, 200];
  pageSize: Number = environment.pageSize;
  intilPageNumber: Number = 0;
  isDataExists: Boolean = false;
  page: PageModel = new PageModel();
  searchDate: string;
  searchText: string = '';
  p: Number;

  ngOnInit() {
    this.pieChart.data = [
      { 'name': 'Communicating', 'value': 10 },
      { 'name': 'Not Communicating', 'value': 5 },
  ]
  }

  onSelect(){

  }
  onPieSliceSelect(){

  }
  
  // getDriverDetails() {
  //   this.reportsApi.getAllDriverDetails(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText, '', '','')
  //     .subscribe((_data: any) => {
  //       this.driverDetails = _data.content;
  //       this.page = _data.page;
  //       this.isDataExists = (this.driverDetails.length > 0);
  //     });
  // }

  // changePageSize() {
  //   this.getDriverDetails();
  // }
  // pageChanged(event) {
  //   this.p = event;
  //   this.intilPageNumber = event - 1;
  //   this.getDriverDetails();
  // }

}
