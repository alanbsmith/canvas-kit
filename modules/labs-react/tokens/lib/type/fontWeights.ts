type ValueOf<T> = T[keyof T];

export type FontWeightValues = ValueOf<FontWeights>;

export type FontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
}

export const fontWeights: FontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
};
