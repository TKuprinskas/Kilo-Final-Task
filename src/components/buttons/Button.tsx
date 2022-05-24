import styled from 'styled-components/macro';
import {
    borderRadius,
    BorderRadiusProps,
    border,
    BorderProps,
    color,
    ColorProps,
    compose,
    position,
    PositionProps,
    layout,
    LayoutProps,
} from 'styled-system';

import { mobile, tablet } from 'styles/breakpoints';

import { Theme } from 'styles/theme';

const buttonProps = compose(border, borderRadius, color, position, layout);

interface Styles<T>
    extends BorderProps<T>,
        BorderRadiusProps<T>,
        ColorProps<T>,
        PositionProps<T>,
        LayoutProps<T> {
    margin?: string;
    padding?: string;
    width?: string | {} | number;
    type?: 'submit' | 'button';
    backgroundColorHover?: string;
}

export const Button = styled.button<Styles<Theme>>`
    display: block;
    padding: ${({ padding }) => (padding ? padding : '0.5rem 1rem')};
    width: 100%;
    font-weight: ${({ theme }) => theme.fontWeights.fw700};
    border-radius: ${({ theme, borderRadius }) =>
        borderRadius ? borderRadius : theme.radii.default};
    border: ${({ border }) => (border ? border : 'none')};
    margin: ${({ margin }) => (margin ? margin : '0')};
    cursor: pointer;
    disabled: ${({ disabled }) => (disabled ? 'disabled' : '')};

    && {
        ${buttonProps};
    }

    &:hover {
        background-color: ${({ theme, backgroundColorHover }) =>
            backgroundColorHover ? backgroundColorHover : theme.colors.white};
        color: ${({ theme }) => theme.colors.orange};
        border: 1px solid ${({ theme }) => theme.colors.orange};
        transition: all 0.2s ease-in-out;
    }

    @media ${mobile} {
        max-width: 100%;
    }

    @media ${tablet} {
        max-width: 100%;
    }
`;
