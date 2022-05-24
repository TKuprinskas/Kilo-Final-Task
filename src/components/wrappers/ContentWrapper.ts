import styled from 'styled-components/macro';
import { Box } from './Box';
import { mobile, tablet } from 'styles/breakpoints';
import { Theme } from 'styles/theme';

interface Styles<T> {
    margin?: string;
    padding?: string;
    maxWidth?: string;
}

export const ContentWrapper = styled(Box)<Styles<Theme>>`
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 928px;

    @media ${mobile} {
        max-width: 100%;
    }

    @media ${tablet} {
        max-width: 100%;
    }
`;
