import React from 'react';
import styled from 'styled-components/macro';
import LazyLoad from 'react-lazyload';
import { smMobile } from 'styles/breakpoints';
import { Visuals, visuals } from 'utils/visuals';
import { Box } from 'components';

interface Styles {
    maxWidth?: string;
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
    border?: string;
    maxHeight?: string;
    borderRadius?: number;
    position?: string;
    boxAlign?: string;
    transform?: string;
}

interface ImageProps extends Styles {
    src: Visuals;
    mobile_src?: Visuals;
    onClick?: () => void;
    alt?: string;
    boxAlign?: string;
    style?: React.CSSProperties;
}

const Img = styled.img<Styles>`
    max-width: ${({ maxWidth }) => maxWidth || ''};
    width: ${({ width }) => width || ''};
    height: ${({ height }) => height || ''};
    margin: ${({ margin }) => margin || ''};
    padding: ${({ padding }) => padding || ''};
    border: ${({ border }) => border || ''};
    max-height: ${({ maxHeight }) => maxHeight || ''};
    position: ${({ position }) => position || ''};
    border-radius: ${({ borderRadius }) => borderRadius || ''};
    transform: ${({ transform }) => transform || ''};
`;

export const Image: React.FC<ImageProps> = ({
    src,
    mobile_src,
    onClick,
    alt,
    boxAlign,
    ...rest
}) => (
    <LazyLoad>
        <picture onClick={onClick}>
            <Box>
                {mobile_src && (
                    <source media={smMobile} srcSet={visuals[mobile_src]} />
                )}
                <Img src={visuals[src]} alt={alt} {...rest} />
            </Box>
        </picture>
    </LazyLoad>
);
