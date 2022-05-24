import styled from 'styled-components/macro';
import {
  compose,
  gridArea,
  GridAreaProps,
  gridColumn,
  GridColumnProps,
  gridRow,
  GridRowProps,
  gridTemplateAreas,
  GridTemplateAreasProps,
  gridTemplateColumns,
  GridTemplateColumnsProps,
  gridTemplateRows,
  GridTemplateRowsProps,
  gridAutoColumns,
  GridAutoColumnsProps,
  gridAutoFlow,
  GridAutoFlowProps,
  gridAutoRows,
  GridAutoRowsProps,
  grid,
  GridProps,
  gridGap,
  GridGapProps,
  gridColumnGap,
  GridColumnGapProps,
  gridRowGap,
  GridRowGapProps,
} from 'styled-system';
import { Box } from './Box';

import { Theme } from 'styles/theme';

const gridProps = compose(
  gridArea,
  gridColumn,
  gridRow,
  gridTemplateAreas,
  gridTemplateColumns,
  gridTemplateRows,
  gridAutoColumns,
  gridAutoFlow,
  gridAutoRows,
  grid,
  gridGap,
  gridColumnGap,
  gridRowGap,
);

interface Styles<T>
  extends GridAreaProps<T>,
    GridColumnProps<T>,
    GridRowProps<T>,
    GridTemplateAreasProps<T>,
    GridTemplateColumnsProps<T>,
    GridTemplateRowsProps<T>,
    GridAutoColumnsProps<T>,
    GridAutoFlowProps<T>,
    GridAutoRowsProps<T>,
    GridProps<T>,
    GridGapProps<T>,
    GridColumnGapProps<T>,
    GridRowGapProps<T> {
  display?: string;
}

export const GridWrapper = styled(Box)<Styles<Theme>>`
  display: grid;

  && {
    ${gridProps};
  }
`;
