import { Component, OnInit, Input } from '@angular/core';
import { IBusyConfig } from 'projects/busy/src/public-api';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  @Input() loading: IBusyConfig;
  constructor() { }

  ngOnInit(): void {
  }

}
