import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public modalSubject = new BehaviorSubject(false);
  public modalState = this.modalSubject.asObservable();

  constructor() { }
  
  toggleModal(status: boolean) {
    this.modalSubject.next(status);
  }
}
