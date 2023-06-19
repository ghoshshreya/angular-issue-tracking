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
    this.search();
  }

  private search() {
    this.searchSubscription = fromEvent(this.searchBox?.nativeElement, 'keyup')
      .pipe(
        map((event) => this.searchBox?.nativeElement.value),
        filter((data) => data.length > 2), // search only when input text length is greater than 2
        debounceTime(1000) // wait for 1 sec before firing the request
      )
      .subscribe((val) => {
        
      });
  }

  private getSearchData() {
    
  }



  ngOnDestroy() {
    this.searchSubscription?.unsubscribe();
  }
}
