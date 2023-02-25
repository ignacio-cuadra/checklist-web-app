import { Component, Input } from '@angular/core';
import { BreadcrumbItem } from './breadcrumb-item.model';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  @Input() items: Array<BreadcrumbItem> = [];
  @Input() class: string = '';
}
