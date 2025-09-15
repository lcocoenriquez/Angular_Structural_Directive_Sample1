import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDirective } from './select';
import { DataSource } from './data-source';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [CommonModule, SelectDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly source = new DataSource();
}
