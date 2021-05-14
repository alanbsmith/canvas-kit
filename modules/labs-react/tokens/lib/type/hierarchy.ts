import {typeColors, fontFamily} from '@workday/canvas-kit-react/tokens';
import {FontSizes, fontSizes, FontSizeValues} from './fontSizes';

import {fontWeights, FontWeightValues} from './fontWeights';

type CanvasTypeLevelSize = {
  fontFamily: typeof fontFamily;
  fontSize: FontSizeValues;
  lineHeight: string;
  letterSpacing?: string;
  fontWeight: FontWeightValues;
  color: string;
};

type CanvasTypeLevel = {
  small: CanvasTypeLevelSize;
  medium: CanvasTypeLevelSize;
  large: CanvasTypeLevelSize;
};

type CanvasTypeDisplayLevel = CanvasTypeLevel & {
  small: CanvasTypeDisplaySmall;
  medium: CanvasTypeDisplayMedium;
  large: CanvasTypeDisplayLarge;
};

type CanvasTypeTitleLevel = CanvasTypeLevel & {
  small: CanvasTypeTitleSmall;
  medium: CanvasTypeTitleMedium;
  large: CanvasTypeTitleLarge;
};

type CanvasTypeHeadingLevel = CanvasTypeLevel & {
  small: CanvasTypeHeadingSmall;
  medium: CanvasTypeHeadingMedium;
  large: CanvasTypeHeadingLarge;
};

type CanvasTypeBodyLevel = CanvasTypeLevel & {
  small: CanvasTypeBodySmall;
  medium: CanvasTypeBodyMedium;
  large: CanvasTypeBodyLarge;
};

type CanvasTypeDetailLevel = CanvasTypeLevel & {
  small: CanvasTypeDetailSmall;
  medium: CanvasTypeDetailMedium;
  large: CanvasTypeDetailLarge;
};

export type CanvasTypeHierarchy = {
  /**
   * The `display` level is intended for use in large heroes and images.
   * It has three sizes: `small`, `medium`, and `large`.
   * Here's a quick reference for font-sizes and weights:
   *
   * - `small`: font-size 64px (4rem), font-weight: bold (700)
   * - `medium`: font-size 80px (5rem), font-weight: bold (700)
   * - `large`: font-size 96px (6rem), font-weight: bold (700)
   *
   * You can find more detailed style information by inspecting individual sizes.
   *
   * Below is an example:
   * @example
   *
   * import { type } from '@workday/canvas-kit-labs-react/tokens';
   *
   * const Display = () => (
   *   <h1 css={type.display.medium}>Display Text</h1>
   * );
   *
   * */
  display: CanvasTypeDisplayLevel;
  /**
   * The `title` level is intended to be used for large page titles.
   * It has three sizes: `small`, `medium`, and `large`.
   * Here's a quick reference for font-sizes and weights:
   *
   * - `small`: font-size 40px (2.5rem), font-weight: bold (700)
   * - `medium`: font-size 48px (3rem), font-weight: bold (700)
   * - `large`: font-size 56px (3.5rem), font-weight: bold (700)
   *
   * You can find more detailed style information by inspecting individual sizes.
   *
   * Below is an example:
   * @example
   *
   * import { type } from '@workday/canvas-kit-labs-react/tokens';
   *
   * const Title = () => (
   *   <h1 css={type.title.medium}>Title Text</h1>
   * );
   *
   * */
  title: CanvasTypeTitleLevel;
  /**
   * The `heading` level is intended to be used for headings and large text.
   * It has three sizes: `small`, `medium`, and `large`.
   * Here's a quick reference for font-sizes and weights:
   *
   * - `small`: font-size 24px (1.5rem), font-weight: bold (700)
   * - `medium`: font-size 28px (1.75rem), font-weight: bold (700)
   * - `large`: font-size 32px (2rem), font-weight: bold (700)
   *
   * You can find more detailed style information by inspecting individual sizes.
   *
   * Below is an example:
   * @example
   *
   * import { type } from '@workday/canvas-kit-labs-react/tokens';
   *
   * const Heading = () => (
   *   <h2 css={type.heading.medium}>Heading Text</h2>
   * );
   *
   * */
  heading: CanvasTypeHeadingLevel;
  /**
   * The `body` level is intended to be used for standard body text.
   * It has three sizes: `small`, `medium`, and `large`.
   * Here's a quick reference for font-sizes and weights:
   *
   * - `small`: font-size 16px (1rem), font-weight: bold (700)
   * - `medium`: font-size 18px (1.125rem), font-weight: bold (700)
   * - `large`: font-size 20px (1.25rem), font-weight: bold (700)
   *
   * You can find more detailed style information by inspecting individual sizes.
   *
   * Below is an example:
   * @example
   *
   * import { type } from '@workday/canvas-kit-labs-react/tokens';
   *
   * const Body = () => (
   *   <p css={type.body.medium}>Body text</p>
   * );
   *
   * */
  body: CanvasTypeBodyLevel;
  /**
   * The `detail` level is intended to be used for small detail content or in tight spaces.
   * It has three sizes: `small`, `medium`, and `large`.
   * Here's a quick reference for font-sizes and weights:
   *
   * - `small`: font-size 10px (0.625rem), font-weight: regular (400)
   * - `medium`: font-size 12px (0.75rem), font-weight: regular (400)
   * - `large`: font-size 14px (0.875rem), font-weight: regular (400)
   *
   * You can find more detailed style information by inspecting individual sizes.
   *
   * Below is an example:
   * @example
   *
   * import { type } from '@workday/canvas-kit-labs-react/tokens';
   *
   * const Detail = () => (
   *   <p css={type.detail.medium}>Detail text</p>
   * );
   *
   * */
  detail: CanvasTypeDetailLevel;
};

/**
 * The type hierarchy contains five levels:
 * - `display`: Intended for use in large heroes and images.
 * - `title`: Intended to be used for large page titles.
 * - `heading`: Intended to be used for headings and large text.
 * - `body`: Intended to be used for standard body text.
 * - `detail`: Intended to be used for small detail content or in tight spaces.
 *
 */
export const hierarchy: CanvasTypeHierarchy = {
  display: {
    small: {
      fontFamily,
      /** 64px converted to base-16 rem  */
      fontSize: fontSizes[64],
      /** 80px converted to base-16 rem */
      lineHeight: '5rem',
      fontWeight: fontWeights.bold,
      color: typeColors.heading,
    },
    medium: {
      fontFamily,
      /** 80px converted to base-16 rem  */
      fontSize: fontSizes[80],
      /** 96px converted to base-16 rem */
      lineHeight: '6rem',
      fontWeight: fontWeights.bold,
      color: typeColors.heading,
    },
    large: {
      fontFamily,
      /** 96px converted to base-16 rem  */
      fontSize: fontSizes[96],
      /** 112px converted to base-16 rem */
      lineHeight: '7.625rem',
      fontWeight: fontWeights.bold,
      color: typeColors.heading,
    },
  },
  title: {
    small: {
      fontFamily,
      /** 40px converted to base-16 rem  */
      fontSize: fontSizes[40],
      /** 48px converted to base-16 rem */
      lineHeight: '3rem',
      fontWeight: fontWeights.bold,
      color: typeColors.heading,
    },
    medium: {
      fontFamily,
      /** 48px converted to base-16 rem  */
      fontSize: fontSizes[48],
      /** 56px converted to base-16 rem */
      lineHeight: '3.5rem',
      fontWeight: fontWeights.bold,
      color: typeColors.heading,
    },
    large: {
      fontFamily,
      /** 56px converted to base-16 rem  */
      fontSize: fontSizes[56],
      /** 64px converted to base-16 rem */
      lineHeight: '4rem',
      fontWeight: fontWeights.bold,
      color: typeColors.heading,
    },
  },
  heading: {
    small: {
      fontFamily,
      /** 24px converted to base-16 rem  */
      fontSize: fontSizes[24],
      /** 32px converted to base-16 rem */
      lineHeight: '2rem',
      fontWeight: fontWeights.bold,
      color: typeColors.heading,
    },
    medium: {
      fontFamily,
      /** 28px converted to base-16 rem  */
      fontSize: fontSizes[28],
      /** 36px converted to base-16 rem */
      lineHeight: '2.25rem',
      fontWeight: fontWeights.bold,
      color: typeColors.heading,
    },
    large: {
      fontFamily,
      /** 32px converted to base-16 rem  */
      fontSize: fontSizes[32],
      /** 40px converted to base-16 rem */
      lineHeight: '2.5rem',
      fontWeight: fontWeights.bold,
      color: typeColors.heading,
    },
  },
  body: {
    small: {
      fontFamily,
      /** 16px converted to base-16 rem  */
      fontSize: fontSizes[16],
      /** 24px converted to base-16 rem */
      lineHeight: '1.5rem',
      /** 0.16 converted to base-16 rem */
      letterSpacing: '0.01rem',
      fontWeight: fontWeights.regular,
      color: typeColors.body,
    },
    medium: {
      fontFamily,
      /** 18px converted to base-16 rem  */
      fontSize: fontSizes[18],
      /** 28px converted to base-16 rem */
      lineHeight: '1.75rem',
      /** 0.16 converted to base-16 rem */
      letterSpacing: '0.01rem',
      fontWeight: fontWeights.regular,
      color: typeColors.body,
    },
    large: {
      fontFamily,
      /** 20px converted to base-16 rem  */
      fontSize: fontSizes[20],
      /** 28px converted to base-16 rem */
      lineHeight: '1.75rem',
      /** 0.16 converted to base-16 rem */
      letterSpacing: '0.01rem',
      fontWeight: fontWeights.regular,
      color: typeColors.body,
    },
  },
  detail: {
    small: {
      fontFamily,
      /** 10px converted to base-16 rem  */
      fontSize: fontSizes[10],
      /** 16px converted to base-16 rem */
      lineHeight: '1rem',
      /** 0.4 converted to base-16 rem */
      letterSpacing: '0.025rem',
      fontWeight: fontWeights.regular,
      color: typeColors.body,
    },
    medium: {
      fontFamily,
      /** 12px converted to base-16 rem  */
      fontSize: fontSizes[12],
      /** 16px converted to base-16 rem */
      lineHeight: '1rem',
      /** 0.32 converted to base-16 rem */
      letterSpacing: '0.02rem',
      fontWeight: fontWeights.regular,
      color: typeColors.body,
    },
    large: {
      fontFamily,
      /** 14px converted to base-16 rem  */
      fontSize: fontSizes[14],
      /** 20px converted to base-16 rem */
      lineHeight: '1.25rem',
      /** 0.24 converted to base-16 rem */
      letterSpacing: '0.015rem',
      fontWeight: fontWeights.regular,
      color: typeColors.body,
    },
  },
};

type CanvasTypeDisplaySmall = CanvasTypeLevelSize & {
  fontFamily: typeof fontFamily;
  /** 64px converted to base-16 rem  */
  fontSize: typeof fontSizes[64];
  /** 80px converted to base-16 rem */
  lineHeight: '5rem';
  fontWeight: typeof fontWeights.bold;
  color: typeof typeColors.heading;
};

type CanvasTypeDisplayMedium = CanvasTypeLevelSize & {
  fontFamily: typeof fontFamily;
  /** 80px converted to base-16 rem  */
  fontSize: typeof fontSizes[80];
  /** 96px converted to base-16 rem */
  lineHeight: '6rem';
  fontWeight: typeof fontWeights.bold;
  color: typeof typeColors.heading;
};

type CanvasTypeDisplayLarge = CanvasTypeLevelSize & {
  fontFamily: typeof fontFamily;
  /** 96px converted to base-16 rem  */
  fontSize: typeof fontSizes[96];
  /** 112px converted to base-16 rem */
  lineHeight: '7.625rem';
  fontWeight: typeof fontWeights.bold;
  color: typeof typeColors.heading;
};

type CanvasTypeTitleSmall = CanvasTypeLevelSize & {
  fontFamily: typeof fontFamily;
  /** 40px converted to base-16 rem  */
  fontSize: typeof fontSizes[40];
  /** 48px converted to base-16 rem */
  lineHeight: '3rem';
  fontWeight: typeof fontWeights.bold;
  color: typeof typeColors.heading;
};

type CanvasTypeTitleMedium = CanvasTypeLevelSize & {
  fontFamily: typeof fontFamily;
  /** 48px converted to base-16 rem  */
  fontSize: typeof fontSizes[48];
  /** 56px converted to base-16 rem */
  lineHeight: '3.5rem';
  fontWeight: typeof fontWeights.bold;
  color: typeof typeColors.heading;
};

type CanvasTypeTitleLarge = CanvasTypeLevelSize & {
  fontFamily: typeof fontFamily;
  /** 56px converted to base-16 rem  */
  fontSize: typeof fontSizes[56];
  /** 64px converted to base-16 rem */
  lineHeight: '4rem';
  fontWeight: typeof fontWeights.bold;
  color: typeof typeColors.heading;
};

type CanvasTypeHeadingSmall = CanvasTypeLevelSize & {
  fontFamily: typeof fontFamily;
  /** 24px converted to base-16 rem  */
  fontSize: typeof fontSizes[24];
  /** 32px converted to base-16 rem */
  lineHeight: '2rem';
  fontWeight: typeof fontWeights.bold;
  color: typeof typeColors.heading;
};

type CanvasTypeHeadingMedium = CanvasTypeLevelSize & {
  fontFamily: typeof fontFamily;
  /** 28px converted to base-16 rem  */
  fontSize: typeof fontSizes[28];
  /** 36px converted to base-16 rem */
  lineHeight: '2.25rem';
  fontWeight: typeof fontWeights.bold;
  color: typeof typeColors.heading;
};

type CanvasTypeHeadingLarge = CanvasTypeLevelSize & {
  fontFamily: typeof fontFamily;
  /** 32px converted to base-16 rem  */
  fontSize: typeof fontSizes[32];
  /** 40px converted to base-16 rem */
  lineHeight: '2.5rem';
  fontWeight: typeof fontWeights.bold;
  color: typeof typeColors.heading;
};

type CanvasTypeBodySmall = CanvasTypeLevelSize & {
  fontFamily: typeof fontFamily;
  /** 16px converted to base-16 rem  */
  fontSize: typeof fontSizes[16];
  /** 24px converted to base-16 rem */
  lineHeight: '1.5rem';
  /** 0.16 converted to base-16 rem */
  letterSpacing: '0.01rem';
  fontWeight: typeof fontWeights.regular;
  color: typeof typeColors.body;
};

type CanvasTypeBodyMedium = CanvasTypeLevelSize & {
  fontFamily: typeof fontFamily;
  /** 18px converted to base-16 rem  */
  fontSize: typeof fontSizes[18];
  /** 28px converted to base-16 rem */
  lineHeight: '1.75rem';
  /** 0.16 converted to base-16 rem */
  letterSpacing: '0.01rem';
  fontWeight: typeof fontWeights.regular;
  color: typeof typeColors.body;
};

type CanvasTypeBodyLarge = CanvasTypeLevelSize & {
  fontFamily: typeof fontFamily;
  /** 20px converted to base-16 rem  */
  fontSize: typeof fontSizes[20];
  /** 28px converted to base-16 rem */
  lineHeight: '1.75rem';
  /** 0.16 converted to base-16 rem */
  letterSpacing: '0.01rem';
  fontWeight: typeof fontWeights.regular;
  color: typeof typeColors.body;
};

type CanvasTypeDetailSmall = CanvasTypeLevelSize & {
  fontFamily: typeof fontFamily;
  fontSize: typeof fontSizes[10];
  /** 16px converted to base-16 rem */
  lineHeight: '1rem';
  /** 0.4 converted to base-16 rem */
  letterSpacing: '0.025rem';
  fontWeight: typeof fontWeights.regular;
  color: typeof typeColors.body;
};

type CanvasTypeDetailMedium = CanvasTypeLevelSize & {
  fontFamily: typeof fontFamily;
  /** 12px converted to base-16 rem  */
  fontSize: typeof fontSizes[12];
  /** 16px converted to base-16 rem */
  lineHeight: '1rem';
  /** 0.32 converted to base-16 rem */
  letterSpacing: '0.02rem';
  fontWeight: typeof fontWeights.regular;
  color: typeof typeColors.body;
};

type CanvasTypeDetailLarge = CanvasTypeLevelSize & {
  fontFamily: typeof fontFamily;
  /** 14px converted to base-16 rem  */
  fontSize: typeof fontSizes[14];
  /** 20px converted to base-16 rem */
  lineHeight: '1.25rem';
  /** 0.24 converted to base-16 rem */
  letterSpacing: '0.015rem';
  fontWeight: typeof fontWeights.regular;
  color: typeof typeColors.body;
};
