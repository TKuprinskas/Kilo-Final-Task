import styled from 'styled-components/macro';
import { Visuals, visuals } from 'utils/visuals';
import {
    compose,
    borderRadius,
    BorderRadiusProps,
    flexDirection,
    FlexDirectionProps,
    flexGrow,
    FlexGrowProps,
    flexShrink,
    FlexShrinkProps,
    flexWrap,
    FlexWrapProps,
    flexBasis,
    FlexBasisProps,
    justifyContent,
    JustifyContentProps,
    alignItems,
    AlignItemsProps,
    alignContent,
    AlignContentProps,
    alignSelf,
    AlignSelfProps,
} from 'styled-system';
import { Box } from './Box';

import { Theme } from 'styles/theme';

const flexProps = compose(
    borderRadius,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    flexBasis,
    justifyContent,
    alignItems,
    alignContent,
    alignSelf
);

interface Styles<T>
    extends FlexDirectionProps<T>,
        FlexGrowProps<T>,
        FlexShrinkProps<T>,
        FlexWrapProps<T>,
        FlexBasisProps<T>,
        JustifyContentProps<T>,
        AlignItemsProps<T>,
        AlignContentProps<T>,
        AlignSelfProps<T>,
        BorderRadiusProps<T> {
    display?: string;
    backgroundImage?: Visuals;
    backgroundSize?: string;
    backgroundPosition?: string;
    backgroundRepeat?: string;
}

export const FlexWrapper = styled(Box)<Styles<Theme>>`
    display: ${({ display }) => display || 'flex'};
    background-image: ${({ backgroundImage }) =>
        backgroundImage ? `url(${visuals[backgroundImage]})` : ''};
    background-repeat: ${({ backgroundRepeat }) =>
        backgroundRepeat ? backgroundRepeat : 'no-repeat'};
    background-position: ${({ backgroundPosition }) =>
        backgroundPosition ? backgroundPosition : 'center'};
    background-size: ${({ backgroundSize }) =>
        backgroundSize ? backgroundSize : 'cover'};

    && {
        ${flexProps};
    }
`;
