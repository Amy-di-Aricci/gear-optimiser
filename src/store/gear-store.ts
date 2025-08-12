import { TWowItem } from '../types/items';
import gearStoreJson from './gear-store.json';
import { MANUAL_ITEMS } from './manual_items';

export const GEAR_STORE: Array<TWowItem> = [...(gearStoreJson as Array<TWowItem>), ...MANUAL_ITEMS];
