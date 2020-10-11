import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BUSY_CONFIG_DEFAULTS, IBusyConfig } from '../../../../busy/src/public-api';
import {OPTIONS_TEMPLATE} from './options-template';
@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.less']
})
export class OptionsComponent {

  templateType = 'default';
  data: IBusyConfig = Object.assign({}, BUSY_CONFIG_DEFAULTS);

  constructor(private httpClient: HttpClient) {
  }

  changeTemplate(type: string): void {
    this.data.template = OPTIONS_TEMPLATE[type];
  }

  playDemo(): void {
    // this.data.busy = this.http.get('https://httpbin.org/delay/3')
    //     .subscribe();
    console.log('here');
    this.data.busy = this.httpClient.get('https://httpbin.org/delay/1')
      .toPromise();
  }
}

