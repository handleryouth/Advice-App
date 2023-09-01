import {FONT_FAMILY} from '@src/theme';
import {FontType} from '@src/types';

export function getFontFamily(value: FontType) {
  return FONT_FAMILY[value];
}
