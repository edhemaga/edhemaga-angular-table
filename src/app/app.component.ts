import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ITableColumn } from './edh-angular-table/models/table-column.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'edhemaga-table';

  data: string[] = ['test', 'test 2'];

  columns: ITableColumn[] = [{
    header: 'Column 1',
    isProjected: false,
    style: [{ 'width': '500px' }]
  }, {
    header: 'Column 2',
    isProjected: false,
    style: [{ 'width': '500px' }]
  }]

  ngOnInit(): void {

  }
}
