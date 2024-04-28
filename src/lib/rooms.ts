import { error } from '@sveltejs/kit';
import { extractCalEvents } from './calendar';
import type { PlainResource } from './resources';
import { buildCalendarUrl, ROOM_CONFIG, type RoomConfig } from './rooms-config';
import type { PlainEvent } from '$lib/events';

export interface Room {
	id: string;
	floor: number;
	resource: PlainResource;
	events: PlainEvent[];
}

export interface RoomCalendar {
	status: number;
	room?: Room;
	error?: string;
}

export async function fetchRoomCalendarFromID(
	roomID: string,
	fetch: Function = globalThis.fetch
): Promise<RoomCalendar> {
	const roomConfig: RoomConfig = ROOM_CONFIG[roomID];
	if (!roomConfig) {
		return { status: 404, error: 'Room not found' };
	}

	try {
		console.time('Fetching: ' + roomID);
		const res = await fetch(buildCalendarUrl(roomID, roomConfig.icalsecurise));
		const data: string = await res.text();
		console.timeEnd('Fetching: ' + roomID);

		return {
			status: 200,
			room: {
				id: roomID,
				floor: roomConfig.floor,
				resource: createResource(roomConfig, roomID),
				events: extractCalEvents(data, [roomID]),
			},
		};
	} catch (e) {
		console.error(`could not retrieve the calendar for room: ${roomID}`, e);
		throw error(500, 'Could not retrieve the calendar for room: ' + roomID);
	}
}

const createResource = (roomConfig: RoomConfig, roomID: string): PlainResource => ({
	id: roomID,
	title: roomConfig.title,
});
