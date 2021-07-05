import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  public formDataSubject = new BehaviorSubject("");
  public formDataState = this.formDataSubject.asObservable();

  constructor() { }

  sendData(data: any) {
    this.formDataSubject.next(data);
  }
}
