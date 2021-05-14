import {Property, Globals} from 'csstype';
import {fontFamily, type, typeColors} from '@workday/canvas-kit-react/tokens';

type FontWeights = {
  regular: 400;
  medium: 500;
  bold: 700;
};

const fontWeights: FontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
};

// I'm not sure this will actually support a11y
const browserDefaultFontSize = 16;
/**
 * Converts px values into base 16 rems
 */
const rem = (pxValue: number) => {
  return `${pxValue / browserDefaultFontSize}rem`;
};

export type TypographyStyleProps = {
  /** sets the font-weight */
  fontWeight?: keyof FontWeights | Globals | (number & {});
  /** sets the type hierarchy level */
  level: 'display' | 'title' | 'heading' | 'body' | 'detail';
  /** sets the size for the chosen type hierarchy level
   *
   * @default "medium"
   */
  size?: 'small' | 'medium' | 'large';
  textAlign?: Property.TextAlign; // add RTL support
  textDecoration?: Property.TextDecoration;
  textTransform?: Property.TextTransform;
  variant?: string;
};



export function typography<P extends TypographyStyleProps>(props: P) {
  let styles = {};
  for (const key in props) {
    // map style props
  }
  return styles;
}
