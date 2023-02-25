export interface Checklist {
  title: string;
  description: string;
  items: Array<ChecklistItem>;
}

export interface ChecklistItem {
  title: string;
  observation?: string;
  status?: boolean;
  items: Array<ChecklistItem>;
}
