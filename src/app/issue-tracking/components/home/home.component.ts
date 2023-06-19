import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewIssueComponent } from '../../new-issue/new-issue.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public navLinks = [
    {
      title: 'Home',
      link: '/home',
    },
  ];
  constructor(public dialogRef: MatDialog) {}

  ngOnInit() {}

  createNew(value: any) {
    console.log(value);

    let dialogRef = this.dialogRef.open(NewIssueComponent, {
      height: '400px',
      width: '600px',
    });
  }

  logout() {
    // this.userService.logout();
  }
}
