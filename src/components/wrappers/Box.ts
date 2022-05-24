import styled from 'styled-components/macro';
import {
    alignSelf,
    AlignSelfProps,
    border,
    BorderProps,
    borderRadius,
    BorderRadiusProps,
    BoxShadowProps,
    color,
    ColorProps,
    compose,
    display,
    DisplayProps,
    justifyContent,
    JustifyContentProps,
    layout,
    LayoutProps,
    position,
    PositionProps,
    shadow,
    ShadowProps,
    space,
    SpaceProps,
    textAlign,
    TextAlignProps,
    zIndex,
    ZIndexProps,
} from 'styled-system';

import { Theme } from 'styles/theme';

export const boxProps = compose(
    alignSelf,
    borderRadius,
    space,
    color,
    display,
    position,
    zIndex,
    layout,
    border,
    shadow,
    textAlign,
    justifyContent
);

interface Styles<T>
    extends BorderProps<T>,
        AlignSelfProps<T>,
        BorderRadiusProps<T>,
        ColorProps<T>,
        PositionProps<T>,
        ZIndexProps<T>,
        DisplayProps<T>,
        JustifyContentProps<T>,
        BoxShadowProps<T>,
        LayoutProps<T>,
        ShadowProps<T>,
        TextAlignProps<T>,
        SpaceProps<T> {
    isCursorPointer?: boolean;
}

export const Box = styled.div<Styles<Theme>>`
    cursor: ${({ isCursorPointer }) =>
        isCursorPointer ? 'pointer' : 'default'};
    && {
        ${boxProps};
    }
`;
