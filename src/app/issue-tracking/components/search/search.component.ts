import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Output,
  EventEmitter,
  OnDestroy,
  Input,
} from '@angular/core';
import { filter, fromEvent, map, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements AfterViewInit, OnDestroy {
  @Input('placeholder') placeholder = 'Search..';
  private searchSubscription: Subscription | undefined;
  @ViewChild('searchBox') private searchBox: ElementRef | undefined;
  @Output() searchEvent = new EventEmitter();

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
        this.searchEvent.emit(val);
      });
  }

  ngOnDestroy() {
    this.searchSubscription?.unsubscribe();
  }
}
