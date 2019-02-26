import {
    PURPLE
} from '../constants';

export const FRI_HOURS = 9
export const SAT_HOURS = 19
export const NUM_COLS = FRI_HOURS + SAT_HOURS;
export const HOUR_WIDTH = 100;
export const CALENDAR_MARGIN = 40;
export const CAL_WIDTH = (HOUR_WIDTH * NUM_COLS) + 2*CALENDAR_MARGIN;
export const CAL_BG = PURPLE;
export const GRADIENT_OFFSET = (HOUR_WIDTH / 4);
export const VERTICAL_HOUR_LINE_WIDTH = 2;