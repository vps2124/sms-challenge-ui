import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../models/data.model';
import { OperationalStatus } from '../models/operationalStatus.model';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  dataURL = "http://localhost:8080/data/";

  create(data: Data): Observable<Data> {
    return this.http.post<Data>(this.dataURL, data);
  }

  update(id: number, data: Data): Observable<Data> {
    return this.http.put<Data>(this.dataURL + id, data);
  }

  getAllData(): Observable<Data[]> {
    return this.http.get<Data[]>(this.dataURL);
  }

  delete(id: number): Observable<OperationalStatus> {
    return this.http.delete<OperationalStatus>(this.dataURL + id);
  }

}
