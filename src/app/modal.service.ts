import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public modalSubject = new Subject();
  public modalState = this.modalSubject.asObservable();

  constructor() { }
  
  toggleModal(status: boolean) {
    this.modalSubject.next(status);
  }
}
