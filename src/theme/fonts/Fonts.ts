import {FontType} from '@src/types';

export type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

export interface FontFamilyProps {
  fontFamily: string;
  fontWeight: FontWeight;
}

export const FONT_FAMILY: Record<FontType, FontFamilyProps> = {
  regular: {
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
  },
  medium: {
    fontFamily: 'Manrope-Medium',
    fontWeight: '500',
  },
  extraBold: {
    fontFamily: 'Manrope-ExtraBold',
    fontWeight: '800',
  },
};
