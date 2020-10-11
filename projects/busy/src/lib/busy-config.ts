/**
 * @file Busy Config
 * @author yumao<yuzhang.lille@gmail.com>
 */

import { IBusyConfig } from './interfaces';
import { BUSY_CONFIG_DEFAULTS } from './consts';

export class BusyConfig implements IBusyConfig {
  template: string;
  delay: number;
  minDuration: number;
  backdrop: boolean;
  message: string;
  wrapperClass: string;

  constructor(config: IBusyConfig = {}) {
    for (const option in BUSY_CONFIG_DEFAULTS) {
      if (config[option] != null) {
        this[option] = config[option];
      }
      else { this[option] = BUSY_CONFIG_DEFAULTS[option]; }
    }
  }
}


