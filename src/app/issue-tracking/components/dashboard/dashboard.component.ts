import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import {
  distinctUntilChanged,
  debounceTime,
  fromEvent,
  tap,
  Subscription,
  map,
  filter,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements AfterViewInit, OnDestroy {
  @ViewChild('searchBox') searchBox: ElementRef | undefined;
  private searchSubscription: Subscription | undefined;

  constructor() {}

  ngAfterViewInit() {
    // this.search();
  }

  

  ngOnDestroy() {
    this.searchSubscription?.unsubscribe();
  }
}
