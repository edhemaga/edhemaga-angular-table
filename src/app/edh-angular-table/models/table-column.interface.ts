export interface ITableColumn {
  header: string;
  isProjected: boolean;
  isEditable?: boolean;
  isSticky?: boolean;
  isSortable?: boolean;
  style?: [{ [key: string]: string }];
}
