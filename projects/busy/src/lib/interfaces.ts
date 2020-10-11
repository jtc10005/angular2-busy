import { Subscription } from 'rxjs';

export interface IBusyContext {
  message: string;
}

export interface IBusyConfig {
  template?: string;
  delay?: number;
  minDuration?: number;
  backdrop?: boolean;
  message?: string;
  wrapperClass?: string;
  busy?: Promise<any> | Subscription | Array<Promise<any> | Subscription>;
}

export interface IPromiseTrackerOptions {
  minDuration: number;
  delay: number;
  promiseList: Promise<any>[];
}
