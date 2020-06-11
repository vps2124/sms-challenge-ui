import { Component, OnInit } from '@angular/core';
import { OperationalStatus } from 'src/app/models/operationalStatus.model';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Data } from 'src/app/models/data.model';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.scss']
})
export class DeleteDataComponent implements OnInit {

  constructor(private dataService: DataService) { }

  data: Data;
  data3: OperationalStatus;
  data1: Observable<any>;
  gridApi: any;
  gridColumnApi: any;
  selectedRows: Data;
  columnDefs = [
    { width: 110, headerName: 'Id', field: 'id', sortable: true },
    { width: 110, headerName: 'City', field: 'city', sortable: true },
    { width: 110, headerName: 'Start Date', field: 'start_date', sortable: true },
    { width: 110, headerName: 'End Date', field: 'end_date', sortable: true },
    { width: 110, headerName: 'Price', field: 'price', sortable: true },
    { width: 110, headerName: 'Status', field: 'status', sortable: true },
    { width: 150, headerName: 'Color', field: 'color', sortable: true }
  ];
 
  ngOnInit(): void {
    this.data1 = this.dataService.getAllData();
  }

  onSelectionChanged(event) {
    this.selectedRows = this.gridApi.getSelectedRows();
    this.data = this.selectedRows[0];
    alert("Are you sure to delete Id: " + this.data.id);
    this.deleteData(this.data.id);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  deleteData(id: number) {
    this.dataService.delete(id).subscribe(
      d => {
        this.data3 = d;
        this.onDeleteSuccess(id, this.data3);
      },
      e => { }
    );
  }

  onDeleteSuccess(id, data) {
    alert(id + "Id is deleated!");
    this.data1 = this.dataService.getAllData();
  }

}
