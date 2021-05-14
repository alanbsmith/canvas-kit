import { typeColors } from "@workday/canvas-colors-web";
import { fontFamily } from "@workday/canvas-kit-react/tokens";


// type HierarchyLevelSizes = {
//   s: CSSProperties;
//   m: CSSProperties;
//   l: CSSProperties;
// };

// export interface CanvasTypeHierarchy {
//   /**
//    * Intended to be used for small detail content or in tight spaces.
//    * - `s`: rem(10px)
//    * - `m`: rem(12px)
//    * - `l`: rem(14px)
//    */
//   detail: {
//     /** rem(10px) */
//     s: CSSProperties;
//     /** rem(12px) */
//     m: CSSProperties;
//     /** rem(14px) */
//     l: CSSProperties;
//   };
//   /**
//    * Intended to be used for standard body text.
//    * - `s`: rem(16px)
//    * - `m`: rem(18px)
//    * - `l`: rem(20px)
//    */
//   text: {
//     /** rem(16px) */
//     s: CSSProperties;
//     /** rem(18px) */
//     m: CSSProperties;
//     /** rem(20px) */
//     l: CSSProperties;
//   };
//   /**
//    * Intended to be used for headings and large text.
//    * - `s`: rem(24px)
//    * - `m`: rem(28px)
//    * - `l`: rem(32px)
//    */
//   heading: {
//     /** rem(24px) */
//     s: CSSProperties;
//     /** rem(28px) */
//     m: CSSProperties;
//     /** rem(32px) */
//     l: CSSProperties;
//   };
//   /**
//    * Intended to be used for large page titles.
//    * - `s`: rem(40px)
//    * - `m`: rem(48px)
//    * - `l`: rem(56px)
//    */
//   title: {
//     /** rem(40px) */
//     s: CSSProperties;
//     /** rem(48px) */
//     m: CSSProperties;
//     /** rem(56px) */
//     l: CSSProperties;
//   };
//   /**
//    * Intended for use in large heroes and images.
//    * - `s`: rem(64px)
//    * - `m`: rem(80px)
//    * - `l`: rem(96px)
//    */
//   display: {
//     /** rem(64px) */
//     s: CSSProperties;
//     /** rem(80px) */
//     m: CSSProperties;
//     /** rem(96px) */
//     l: CSSProperties;
//   };
//   [key: string]: HierarchyLevelSizes;
// }

const browserDefaultFontSize = 16;
/**
 * Converts px values into base 16 rems
 */
const rem = (pxValue: number) => {
  return `${pxValue / browserDefaultFontSize}rem`;
};

/**
 * - `detail`: Intended to be used for small detail content or in tight spaces.
 * - `text`: Intended to be used for standard body text.
 * - `heading`: Intended to be used for headings and large text.
 * - `title`: Intended to be used for large page titles.
 * - `display`: Intended for use in large heroes and images.
 *
 * The resulting rem values are based on a browser default font size of 16px.
 */
export const hierarchy = {
  detail: {
    s: {
      fontFamily,
      fontSize: rem(10),
      lineHeight: rem(16),
      letterSpacing: rem(0.4),
      fontWeight: 400,
      color: typeColors.body
    },
    m: {
      fontFamily,
      fontSize: rem(12),
      lineHeight: rem(16),
      letterSpacing: rem(0.32),
      fontWeight: 400,
      color: typeColors.body
    },
    l: {
      fontFamily,
      fontSize: rem(14),
      lineHeight: rem(20),
      letterSpacing: rem(0.24),
      fontWeight: 400,
      color: typeColors.body
    }
  },
  text: {
    s: {
      fontFamily,
      fontSize: rem(16),
      lineHeight: rem(24),
      letterSpacing: rem(0.16),
      fontWeight: 400,
      color: typeColors.body
    },
    m: {
      fontFamily,
      fontSize: rem(18),
      lineHeight: rem(28),
      letterSpacing: rem(0.16),
      fontWeight: 400,
      color: typeColors.body
    },
    l: {
      fontFamily,
      fontSize: rem(20),
      lineHeight: rem(28),
      letterSpacing: rem(0.16),
      fontWeight: 400,
      color: typeColors.body
    }
  },
  heading: {
    s: {
      fontFamily,
      fontSize: rem(24),
      lineHeight: rem(32),
      fontWeight: 700,
      color: typeColors.heading
    },
    m: {
      fontFamily,
      fontSize: rem(28),
      lineHeight: rem(36),
      fontWeight: 700,
      color: typeColors.heading
    },
    l: {
      fontFamily,
      fontSize: rem(32),
      lineHeight: rem(40),
      fontWeight: 700,
      color: typeColors.heading
    }
  },
  title: {
    s: {
      fontFamily,
      fontSize: rem(40),
      lineHeight: rem(48),
      fontWeight: 700,
      color: typeColors.heading
    },
    m: {
      fontFamily,
      fontSize: rem(48),
      lineHeight: rem(56),
      fontWeight: 700,
      color: typeColors.heading
    },
    l: {
      fontFamily,
      fontSize: rem(56),
      lineHeight: rem(64),
      fontWeight: 700,
      color: typeColors.heading
    }
  },
  display: {
    s: {
      fontFamily,
      fontSize: rem(64),
      lineHeight: rem(80),
      fontWeight: 700,
      color: typeColors.heading
    },
    m: {
      fontFamily,
      fontSize: rem(80),
      lineHeight: rem(96),
      fontWeight: 700,
      color: typeColors.heading
    },
    l: {
      fontFamily,
      fontSize: rem(96),
      lineHeight: rem(112),
      fontWeight: 700,
      color: typeColors.heading
    }
  }
};

export const type = {
  ...hierarchy,
  variant: beta_Type.variant
};
