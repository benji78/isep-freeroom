import { startOfWeek } from 'date-fns';
import ICAL from 'ical.js';
import type { Event } from '@prisma/client';

export const dateOptions: Intl.DateTimeFormatOptions = { dateStyle: 'medium', timeZone: 'Europe/Paris' };
export const timeOptions: Intl.DateTimeFormatOptions = { timeStyle: 'short', timeZone: 'Europe/Paris' };
export const dateTimeOptions: Intl.DateTimeFormatOptions = { ...dateOptions, ...timeOptions };

export function extractCalEvents(icalRaw: string, roomId: string): Event[] {
  const now = new Date();
  try {
    const calData = ICAL.parse(icalRaw);
    const subcomponents: ICAL.Event[] = new ICAL.Component(calData)
      .getAllSubcomponents('vevent')
      .map((subcomp: ICAL.Component) => new ICAL.Event(subcomp));

    const filteredEvents: ICAL.Event[] = subcomponents.filter((e: ICAL.Event) => {
      const isValidEvent: boolean = e.summary !== 'Férié' && !e.summary.startsWith('cours annulé');

      const startDate: Date = e.startDate.toJSDate();
      const weekStart: Date = startOfWeek(now, { weekStartsOn: 1 });
      const isAfterWeekStart: boolean = startDate >= weekStart;

      return isValidEvent && isAfterWeekStart;
    });
    console.log(filteredEvents[0].description);

    return filteredEvents.map(
      (event: ICAL.Event): Event => ({
        id: `${event.uid}`,
        resourceIds: [roomId],
        title: event.summary,
        // unixTime (in s), converted to ms for Date constructor
        start: new Date(event.startDate.toUnixTime() * 1000),
        end: new Date(event.endDate.toUnixTime() * 1000),
        roomId,
      })
    );
  } catch (error) {
    console.error('failed parsing calendar', error, icalRaw);
    throw error;
  }
}
