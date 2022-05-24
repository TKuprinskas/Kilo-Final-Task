import React from 'react';
import { FlexWrapper, SectionWrapper } from 'components';
import { Racquet } from '../elements/Racquet';

export const Configuration: React.FC = () => (
    <>
        <FlexWrapper
            backgroundImage="results"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundPosition="center top"
            height={{ _: '31.25rem', mobile: '9.375rem' }}
            margin={{ _: '-5rem 0 0 0', mobile: '0 auto' }}
        />
        <SectionWrapper>
            <Racquet />
        </SectionWrapper>
    </>
);
