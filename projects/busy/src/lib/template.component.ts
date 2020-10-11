// import {
//   Component,
//   Compiler,
//   NgModule,
//   NgModuleFactory,
//   Injectable,
//   DoCheck,
//   OnDestroy
// } from '@angular/core';

// @Component({ template })
// class TemplateComponent {
//   message: string = message;
// }



import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'template',
  template: ``
})

export class TemplateComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}

@NgModule({
  declarations: [TemplateComponent],
  entryComponents: [TemplateComponent]
})
export class TemplateModule { }
