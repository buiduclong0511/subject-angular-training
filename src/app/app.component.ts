import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isShowModal: boolean = false;

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.modalService.modalState.subscribe((res: any) => {
      this.isShowModal = res;
    })
  }
}
