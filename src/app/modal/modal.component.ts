import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormDataService } from '../form-data.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    private modalService: ModalService,
    private fb: FormBuilder,
    private formDataService: FormDataService
  ) {
  }

  formData = this.fb.group({
    name: [""],
    age: [""]
  })

  data = {
    name: "",
    age: ""
  }

  ngOnInit(): void {
    this.formDataService.formDataState.subscribe((res: any) => {
      this.data.name = res.name;
      this.data.age = res.age;
    })
  }

  handleCloseModal() {
    this.modalService.toggleModal(false);
  }

  handleGetData() {
    this.formData = this.fb.group({
      name: [this.data.name],
      age: [this.data.age]
    })
  }
}
