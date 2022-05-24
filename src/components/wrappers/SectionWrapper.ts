import styled from 'styled-components/macro';
import { Visuals, visuals } from 'utils/visuals';

import { mobile, tablet } from 'styles/breakpoints';
import { Colors } from 'styles/theme';

interface SectionWrapperStyles {
    minHeight?: string;
    backgroundColor?: Colors;
    borderBottom?: string;
    borderTop?: string;
    backgroundImage?: Visuals;
    backgroundSize?: string;
    backgroundPosition?: string;
    backgroundRepeat?: string;
    padding?: string;
    textAlign?: string;
}

export const SectionWrapper = styled.section<SectionWrapperStyles>`
    position: relative;
    padding: ${({ padding }) => (padding ? padding : '24px')};
    min-height: ${({ minHeight }) => minHeight || ''};
    border-bottom: ${({ borderBottom }) => borderBottom || ''};
    background-color: ${({ theme, backgroundColor }) =>
        backgroundColor ? theme.colors[backgroundColor] : ''};
    background-image: ${({ backgroundImage }) =>
        backgroundImage ? `url(${visuals[backgroundImage]})` : ''};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    text-align: ${({ textAlign }) => textAlign || ''};

    @media ${mobile} {
        padding: 32px;
    }

    @media ${tablet} {
        padding: 48px;
    }
`;
