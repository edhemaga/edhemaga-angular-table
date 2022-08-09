import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ITableColumn } from './models/table-column.interface';

@Component({
  selector: 'app-edh-angular-table',
  templateUrl: './edh-angular-table.component.html',
  styleUrls: ['./edh-angular-table.component.css']
})
export class EdhAngularTableComponent<T> implements OnInit, OnDestroy {

  @Input() columns: ITableColumn[] = [];

  @Input()
  set dataSource(val: T[]) {
    if (!val) return;
    this.data$.next(val);
  }

  data$ = new BehaviorSubject<T[]>([]);

  private unsubscribeAll$ = new Subject<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.data$.complete();
    this.unsubscribeAll$.next(true);
    this.unsubscribeAll$.complete();
  }

}
