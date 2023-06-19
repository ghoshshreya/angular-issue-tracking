import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { NewIssueComponent } from './new-issue/new-issue.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
  ],
  declarations: [
    DashboardComponent,
    HomeComponent,
    SearchComponent,
    NewIssueComponent,
  ],
  exports: [DashboardComponent, HomeComponent],
  providers: [ApiService],
})
export class IssueTrackingModule {}
