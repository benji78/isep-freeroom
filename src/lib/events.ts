export type Event = Required<PlainEvent>;

export interface PlainEvent {
  id: string;
  resourceIds: string[];
  allDay?: boolean;
  start: Date;
  end: Date;
  title: string;
  editable?: boolean;
  startEditable?: boolean;
  durationEditable?: boolean;
  display?: 'auto' | 'background';
  backgroundColor?: string;
  textColor?: string;
  extendedProps?: object;
}
