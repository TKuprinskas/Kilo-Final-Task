import React from 'react';
import { FlexWrapper } from 'components';
import { RacquetCard } from '../elements';

export const Racquets: React.FC = () => (
    <FlexWrapper
        width="75%"
        margin="0 auto 1.875rem auto"
        borderBottom="orange"
        flexDirection={{ _: 'row', mobile: 'column' }}
    >
        <RacquetCard />
    </FlexWrapper>
);
