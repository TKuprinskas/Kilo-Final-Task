import React from 'react';
import { Typography } from 'components';
import styled, { keyframes } from 'styled-components/macro';
import { useQuery } from 'styles/breakpoints';

export const Loader = () => {
    const { isTablet } = useQuery();

    return (
        <>
            <LoaderWrapper>
                <LoaderBackground>
                    <Typography
                        type="h1"
                        color="white"
                        fontStyle="italic"
                        textAlign={isTablet ? 'center' : 'left'}
                        padding={isTablet ? '0' : '1.25rem'}
                    >
                        Analysing your answers...
                    </Typography>
                    <Spinner
                        width={isTablet ? '7.1875rem' : ''}
                        height={isTablet ? '6.25rem' : ''}
                    />
                </LoaderBackground>
            </LoaderWrapper>
        </>
    );
};

export const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div<{ height: string; width: string }>`
    margin: 0 1.25rem;
    border: 1rem solid white;
    border-top: 1rem solid orange;
    border-radius: 50%;
    width: ${({ width }) => width || '8.75rem'};
    height: ${({ height }) => height || '8.75rem'};
    animation: ${spin} 2s linear infinite;
`;

export const LoaderBackground = styled.div`
    display: flex;
    align-items: center;
    border-radius: ${({ theme }) => theme.radii.br16};
    background-color: rgba(0, 0, 0, 0.85);
`;
