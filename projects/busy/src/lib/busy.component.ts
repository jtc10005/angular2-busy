/**
 * @file Component: Busy
 * @author yumao<yuzhang.lille@gmail.com>
 */

import {
  Component,
  Compiler,
  NgModule,
  NgModuleFactory,
  Injectable,
  DoCheck,
  OnDestroy,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { PromiseTrackerService } from './promise-tracker.service';
import { TemplateComponent, TemplateModule } from './template.component';


const inactiveStyle = style({
  opacity: 0,
  transform: 'translateY(-40px)'
});
const timing = '.3s ease';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-busy',
  template: `
        <div [class]="wrapperClass" *ngIf="isActive()" @flyInOut>
            <ng-container *ngComponentOutlet="templateComponent; ngModuleFactory: nmf;"></ng-container>
        </div>
    `,
  animations: [
    trigger('flyInOut', [
      transition('void => *', [
        inactiveStyle,
        animate(timing)
      ]),
      transition('* => void', [
        animate(timing, inactiveStyle)
      ])
    ])
  ]
})
export class BusyComponent implements DoCheck, OnDestroy {
  templateComponent;
  public nmf: NgModuleFactory<any>;
  wrapperClass: string;
  template: string;
  message: string;
  private lastMessage: string;
  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;
  constructor(
    private tracker: PromiseTrackerService,
    private compiler: Compiler
  ) { }

  ngDoCheck(): void {
    if (this.message === this.lastMessage) {
      return;
    }
    this.lastMessage = this.message;
    this.clearDynamicTemplateCache();
    this.createDynamicTemplate();
  }

  ngOnDestroy(): void {
    this.clearDynamicTemplateCache();
  }

  createDynamicTemplate(): void {
    console.log('here2');
    // const { template, message } = this;
    // // const template = '<span>generated on the fly: {{name}}</span>';

    // const tmpCmp = Component({ template: template })(class {
    // });
    // const tmpModule = NgModule({ declarations: [tmpCmp] })(class {
    // });

    // this.compiler.compileModuleAndAllComponentsAsync(tmpModule)
    //   .then((factories) => {
    //     const f = factories.componentFactories[0];
    //     const cmpRef = this.vc.createComponent(f);
    //     cmpRef.instance.name = 'dynamic';
    //   });

    const { template, message } = this;

    @Component({ template: '' })
    // tslint:disable-next-line:no-shadowed-variable
    class TemplateComponent {
      message: string = message;
    }

    @NgModule({
      declarations: [TemplateComponent],
      entryComponents: [TemplateComponent]
    })
    // tslint:disable-next-line:no-shadowed-variable
    class TemplateModule { }

    this.templateComponent = TemplateComponent;
    this.nmf = this.compiler.compileModuleSync(TemplateModule);
  }


  clearDynamicTemplateCache(): void {
    if (!this.nmf) {
      return;
    }

    this.compiler.clearCacheFor(this.nmf.moduleType);
    this.nmf = null;
  }

  isActive(): boolean {
    return this.tracker.isActive();
  }
}
