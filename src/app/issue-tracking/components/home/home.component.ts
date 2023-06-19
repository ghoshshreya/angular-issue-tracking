import { Component, OnInit } from '@angular/core';
// import { UserDetailsService } from 'src/app/services/userDetails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  logout() {
    // this.userService.logout();
  }
}
