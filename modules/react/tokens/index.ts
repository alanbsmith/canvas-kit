import {
  buttonColors,
  chartingColorOffsets,
  chartingColors,
  colors,
  commonColors,
  gradients,
  iconColors,
  inputColors,
  statusColors,
  typeColors,
} from '@workday/canvas-colors-web';

import {borderRadius, CanvasBorderRadius, CanvasBorderRadiusKeys, CanvasBorderRadiusValues} from './lib/radius';
import {BrandingColor, CanvasColor} from './lib/colors.types';
import { depth, CanvasDepth, CanvasDepthValue} from './lib/depth';
import {
  space,
  CanvasSpace,
  CanvasSpaceKeys,
  CanvasSpaceValues,
  CanvasSpaceNumberValues,
  CanvasSpaceNumbers,
  spaceNumbers,
} from './lib/space';
import {type,
  fontFamily,
  monoFontFamily,
  CanvasType,
  CanvasTypeProperties,
  CanvasTypeVariants,
  CanvasTypeHierarchy,
} from './lib/type';
import {CSSProperties} from './lib/types';

const canvas = {
  buttonColors,
  chartingColorOffsets,
  chartingColors,
  colors,
  commonColors,
  depth,
  fontFamily,
  gradients,
  iconColors,
  inputColors,
  monoFontFamily,
  space,
  statusColors,
  type,
  typeColors,
};

export * from '@workday/canvas-colors-web';
export {
  // border
  borderRadius,
  // color
  colors,
  gradients,
  // depth
  depth,
  // space
  space,
  spaceNumbers,
  // type
  type,
  fontFamily,
  monoFontFamily,
};

export default canvas;

export type {
  // border
  CanvasBorderRadius,
  CanvasBorderRadiusKeys,
  CanvasBorderRadiusValues,
  // color
  CanvasColor,
  BrandingColor,
  // depth
  CanvasDepth,
  CanvasDepthValue,
  // space
  CanvasSpace,
  CanvasSpaceKeys,
  CanvasSpaceValues,
  CanvasSpaceNumberValues,
  CanvasSpaceNumbers,
  // type
  CanvasType,
  CanvasTypeProperties,
  CanvasTypeVariants,
  CanvasTypeHierarchy,
  // util
  CSSProperties,
}
