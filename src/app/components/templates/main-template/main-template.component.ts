import { Component, Input } from '@angular/core';
import { BreadcrumbItem } from '../../common/breadcrumb/breadcrumb-item.model';

@Component({
  selector: 'app-main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.scss'],
})
export class MainTemplateComponent {
  @Input() isContained: boolean = true;
  @Input() breadcrumb: Array<BreadcrumbItem> | undefined = undefined;
  @Input() title: string | undefined = undefined;
}
