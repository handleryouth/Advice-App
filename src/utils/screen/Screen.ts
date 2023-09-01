import {SCREEN_OPTIONS, SHOW_HEADER_OPTIONS} from '@src/const';

export function generateShowHeaderScreenTitle(name: string) {
  return {
    ...SHOW_HEADER_OPTIONS,
    title: name,
  };
}

export function generateScreenTitle(name: string) {
  return {
    ...SCREEN_OPTIONS,
    title: name,
  };
}
