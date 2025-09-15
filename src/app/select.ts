
import { Directive, inject, TemplateRef, ViewContainerRef, input } from '@angular/core';
import { DataSource } from './data-source';

@Directive({
  selector: '[select]',
  standalone: true
})
export class SelectDirective {
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  selectFrom = input.required<DataSource>();

  async ngOnInit() {
    const data = await this.selectFrom().load();
    this.viewContainerRef.createEmbeddedView(this.templateRef, {
      $implicit: data,
    });
  }
}
