import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestService } from '../service/request.service'
import {ThemePalette} from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  userForm!: FormGroup;
  code = "";

  constructor(
    private request: RequestService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      phoneNo: [null, [Validators.required]],
      userName: [null, Validators.required],
      grantAgeWise: [false, Validators.required],
      grantUpload: [false, Validators.required],
      grantEdit: [false, Validators.required],
      grantSale: [false, Validators.required],
    });
  }

  onSubmit() {
    this.request.addUser(this.userForm.value).subscribe((e) => {
      this.code = e.toString();
    })
  }

}
