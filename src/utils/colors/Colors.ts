import {COLORS_MAP} from '@src/theme';
import {ColorsType} from '@src/types';

export function getColor(color: ColorsType) {
  return COLORS_MAP[color];
}
