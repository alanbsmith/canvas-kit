type ValueOf<T> = T[keyof T];

export type FontSizes = {
  /** 10px converted to base-16 rem  */
  10: "0.625rem",
  /** 12px converted to base-16 rem  */
  12: "0.75rem",
  /** 14px converted to base-16 rem  */
  14: "0.875rem",
  /** 16px converted to base-16 rem  */
  16: "1rem",
  /** 18px converted to base-16 rem  */
  18: "1.125rem",
  /** 20px converted to base-16 rem  */
  20: "1.25rem",
  /** 24px converted to base-16 rem  */
  24: "1.5rem",
  /** 28px converted to base-16 rem  */
  28: "1.75rem",
  /** 32px converted to base-16 rem  */
  32: "2rem",
  /** 40px converted to base-16 rem  */
  40: "2.5rem",
  /** 48px converted to base-16 rem  */
  48: "3rem",
  /** 56px converted to base-16 rem  */
  56: "3.5rem",
  /** 64px converted to base-16 rem  */
  64: "4rem",
  /** 80px converted to base-16 rem  */
  80: "5rem",
  /** 96px converted to base-16 rem  */
  96: "6rem",
}

export type FontSizeValues = ValueOf<FontSizes>

export const fontSizes: FontSizes =  {
  /** 10px converted to base-16 rem  */
  10: "0.625rem",
  /** 12px converted to base-16 rem  */
  12: "0.75rem",
  /** 14px converted to base-16 rem  */
  14: "0.875rem",
  /** 16px converted to base-16 rem  */
  16: "1rem",
  /** 18px converted to base-16 rem  */
  18: "1.125rem",
  /** 20px converted to base-16 rem  */
  20: "1.25rem",
  /** 24px converted to base-16 rem  */
  24: "1.5rem",
  /** 28px converted to base-16 rem  */
  28: "1.75rem",
  /** 32px converted to base-16 rem  */
  32: "2rem",
  /** 40px converted to base-16 rem  */
  40: "2.5rem",
  /** 48px converted to base-16 rem  */
  48: "3rem",
  /** 56px converted to base-16 rem  */
  56: "3.5rem",
  /** 64px converted to base-16 rem  */
  64: "4rem",
  /** 80px converted to base-16 rem  */
  80: "5rem",
  /** 96px converted to base-16 rem  */
  96: "6rem",
};
