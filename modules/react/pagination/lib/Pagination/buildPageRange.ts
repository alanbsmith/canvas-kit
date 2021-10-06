import {PaginationState} from './types';

const buildRange = (max: number, min: number): number[] => {
  // `max` determines the size of the range, and `min + index` determines its values
  const range = [...Array(max)].map((_, index) => min + index);
  console.log('range', range);
  return range;
};

type BuildPageRangeConfig = Pick<PaginationState, 'currentPage' | 'lastPage' | 'rangeSize'> & {
  firstPage?: number;
};

export const buildPageRange = ({
  currentPage,
  firstPage = 1,
  lastPage,
  rangeSize,
}: BuildPageRangeConfig) => {
  // prevent the range size exceeding the number of pages
  const adjustedRangeSize = lastPage < rangeSize ? lastPage : rangeSize;

  // Prevent the range from going below the first page
  if (currentPage <= Math.floor(rangeSize / 2) + firstPage) {
    const rangeMin = firstPage;
    return buildRange(adjustedRangeSize, rangeMin);
  }
  // Prevent the range from going above the lastPage
  if (currentPage + Math.floor(adjustedRangeSize / 2) > lastPage) {
    const rangeMin = lastPage - adjustedRangeSize + 1;
    return buildRange(adjustedRangeSize, rangeMin);
  }
  const rangeMin = currentPage - Math.floor(adjustedRangeSize / 2);
  return buildRange(adjustedRangeSize, rangeMin);
};
