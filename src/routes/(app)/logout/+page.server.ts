import { serverLoad } from '@macfja/sveltekit-session';
import type { PageServerLoad } from './$types';

export const prerender = false;

export const load: PageServerLoad = async (event) => serverLoad(event);
