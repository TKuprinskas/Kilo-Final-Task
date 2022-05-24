import styled from 'styled-components/macro';
import {
    borderRadius,
    BorderRadiusProps,
    color,
    ColorProps,
    compose,
    position,
    PositionProps,
} from 'styled-system';

import { mobile, tablet } from 'styles/breakpoints';

import { Theme } from 'styles/theme';

const containerProps = compose(borderRadius, color, position);

interface Styles<T>
    extends BorderRadiusProps<T>,
        ColorProps<T>,
        PositionProps<T> {
    margin?: string;
    padding?: string;
    maxWidth?: string;
}

export const Container = styled.div<Styles<Theme>>`
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 1152px;

    && {
        ${containerProps};
    }

    @media ${mobile} {
        max-width: 100%;
    }

    @media ${tablet} {
        max-width: 100%;
    }
`;
