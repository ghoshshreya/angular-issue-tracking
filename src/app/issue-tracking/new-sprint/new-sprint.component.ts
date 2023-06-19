import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-sprint',
  templateUrl: './new-sprint.component.html',
  styleUrls: ['./new-sprint.component.css'],
})
export class NewSprintComponent implements OnInit {
  public newSprintForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.newSprintForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      active: [true, Validators.required],
    });
  }

  ngOnInit() {}

  createNew() {}
}
