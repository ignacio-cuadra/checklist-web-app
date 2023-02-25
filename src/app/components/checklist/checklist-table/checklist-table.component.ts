import { Component, Input } from '@angular/core';
import { Checklist } from '../checklist.model';

@Component({
  selector: 'app-checklist-table',
  templateUrl: './checklist-table.component.html',
})
export class ChecklistTableComponent {
  @Input() checklists: Array<Checklist> = [];
}
