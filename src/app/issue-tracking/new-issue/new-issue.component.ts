import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.css'],
})
export class NewIssueComponent implements OnInit {
  public newIssueForm: FormGroup;
  public activeSprints = [];
  public getSprintsUrl =
    'https://my-json-server.typicode.com/ghoshshreya/mockjson/sprints';

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.newIssueForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null],
      sprint: [null, [Validators.required]],
    });
  }

  ngOnInit() {
    this.getActiveSprints();
  }

  getActiveSprints() {
    this.apiService.get(this.getSprintsUrl, []).subscribe((res: any) => {
      console.log(new Date());
    });
  }

  createNew() {
    console.log(this.newIssueForm?.value);
    // this.apiService.post();
  }
}
