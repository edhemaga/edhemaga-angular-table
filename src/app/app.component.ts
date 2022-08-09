import { Component } from '@angular/core';
import { ITableColumn } from './edh-angular-table/models/table-column.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'edhemaga-table';

  columns: ITableColumn[] = [{
    header: 'Column 1',
    isProjected: false,
    style: [{ 'width': '500px' }]
  }]
}
