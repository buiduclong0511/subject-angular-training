import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormDataService } from '../form-data.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private modalService: ModalService,
    private fb: FormBuilder,
    private formDataService: FormDataService
  ) { }

  formData = this.fb.group({
    name: [""],
    age: [""]
  })

  ngOnInit(): void {
  }

  handleShowModal() {
    this.modalService.toggleModal(true);
  }

  handleSubmit() {
    this.handleShowModal();
    this.formDataService.sendData(this.formData.value);
  }
}
