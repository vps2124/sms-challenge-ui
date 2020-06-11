import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Data } from 'src/app/models/data.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.scss']
})
export class ShowDataComponent implements OnInit {

  constructor(private dataService: DataService) { }

  data2: Data[];
  data1: Observable<any>;
  columnDefs = [
    { width: 110, headerName: 'Id', field: 'id' , sortable: true},
    { width: 110, headerName: 'City', field: 'city', sortable: true},
    { width: 110, headerName: 'Start Date', field: 'start_date', sortable: true},
    { width: 110, headerName: 'End Date', field: 'end_date', sortable: true},
    { width: 110, headerName: 'Price', field: 'price', sortable: true},
    { width: 110, headerName: 'Status', field: 'status', sortable: true},
    { width: 150, headerName: 'Color', field: 'color', sortable: true}
  ];

  ngOnInit(): void {

    this.data1 = this.dataService.getAllData();
  }
}
