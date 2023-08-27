import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Data as DataImportet } from './data.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSubject = new BehaviorSubject<DataImportet[]>([]);
  public data$ = this.dataSubject.asObservable();

  constructor() {}

  setData(data: DataImportet[]) {
    this.dataSubject.next(data);
  }

  addData(item: DataImportet) {
    // console.log(item)
    const currentData = this.dataSubject.value;
    currentData.push(item);
    this.dataSubject.next(currentData);
  }
}
