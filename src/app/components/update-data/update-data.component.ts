import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Data } from 'src/app/models/data.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.scss']
})
export class UpdateDataComponent implements OnInit {

  constructor(private dataService: DataService) { }

  data: Data;
  updateForm: FormGroup;
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
    this.formInit();
  }

  formInit() {
    this.data = new Data();
    this.updateForm = new FormGroup({
      'city': new FormControl(this.data.city, Validators.required),
      'start_date': new FormControl(this.data.start_date, Validators.required),
      'end_date': new FormControl(this.data.end_date, Validators.required),
      'price': new FormControl(this.data.price, Validators.required),
      'status': new FormControl(this.data.status, Validators.required),
      'color': new FormControl(this.data.color, Validators.required)
    });

    this.updateForm.get('city').valueChanges.subscribe(val => {
      if (val) {
        this.data.city = val;
      }
    });

    this.updateForm.get('start_date').valueChanges.subscribe(val => {
      if (val) {
        this.data.start_date = val;
      }
    });

    this.updateForm.get('end_date').valueChanges.subscribe(val => {
      if (val) {
        this.data.end_date = val;
      }
    });

    this.updateForm.get('price').valueChanges.subscribe(val => {
      if (val) {
        this.data.price = val;
      }
    });

    this.updateForm.get('status').valueChanges.subscribe(val => {
      if (val) {
        this.data.status = val;
      }
    });

    this.updateForm.get('color').valueChanges.subscribe(val => {
      if (val) {
        this.data.color = val;
      }
    });

  }

  onSelectionChanged(event) {
    this.selectedRows = this.gridApi.getSelectedRows();
    this.data = this.selectedRows[0];
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  update() {
    this.subscribeToUpdateResponse(this.dataService.update(this.data.id, this.data));
  }

  private subscribeToUpdateResponse(result: Observable<Data>) {
    result.subscribe((res: Data) =>
      this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
  }

  private onSaveSuccess(result: Data) {
    alert("Record Updated!");
    this.data1 = this.dataService.getAllData();
    this.formInit();
  }
  private onSaveError(error) {
    alert("Record Not Updated!");
  }


}
