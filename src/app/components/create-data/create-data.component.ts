import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Data } from 'src/app/models/data.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.scss']
})
export class CreateDataComponent implements OnInit {

  constructor(private dataService: DataService) { }

  data: Data;
  createForm: FormGroup;
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
    this.formInit();
    this.data1 = this.dataService.getAllData();
  }
  formInit() {
    this.data = new Data();
    this.createForm = new FormGroup({
      'city': new FormControl(this.data.city, Validators.required),
      'start_date': new FormControl(this.data.start_date, Validators.required),
      'end_date': new FormControl(this.data.end_date, Validators.required),
      'price': new FormControl(this.data.price, Validators.required),
      'status': new FormControl(this.data.status, Validators.required),
      'color': new FormControl(this.data.color, Validators.required)
    });

    this.createForm.get('city').valueChanges.subscribe(val => {
      if (val) {
        this.data.city = val;
      }
    });

    this.createForm.get('start_date').valueChanges.subscribe(val => {
      if (val) {
        this.data.start_date = val;
      }
    });

    this.createForm.get('end_date').valueChanges.subscribe(val => {
      if (val) {
        this.data.end_date = val;
      }
    });

    this.createForm.get('price').valueChanges.subscribe(val => {
      if (val) {
        this.data.price = val;
      }
    });

    this.createForm.get('status').valueChanges.subscribe(val => {
      if (val) {
        this.data.status = val;
      }
    });

    this.createForm.get('color').valueChanges.subscribe(val => {
      if (val) {
        this.data.color = val;
      }
    });

  }

  save() {
    this.subscribeToCreateResponse(this.dataService.create(this.data));
  }

  private subscribeToCreateResponse(result: Observable<Data>) {
    result.subscribe((res: Data) =>
      this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
  }

  private onSaveSuccess(result: Data) {
    alert("Record Created!");
    this.data1 = this.dataService.getAllData();
    this.formInit();
  }
  private onSaveError(error) {
    alert("Record Not Created!");
  }

}
