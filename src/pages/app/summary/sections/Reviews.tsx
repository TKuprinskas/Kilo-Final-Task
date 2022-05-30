import React from 'react';
import { Box, FlexWrapper, Typography } from 'components';
import { ReviewCard, ReviewItems } from '../elements';

export const Reviews: React.FC = () => (
    <Box marginBottom="2.5rem">
        <Typography type="h2" textAlign="center">
            Hear from our customers
        </Typography>
        <FlexWrapper
            width="75%"
            margin="1.875rem auto 0 auto"
            justifyContent="space-around"
            flexDirection={{ _: 'row', mobile: 'column' }}
        >
            {ReviewItems.map(
                ({ title, location, img, text }, index: number) => {
                    return (
                        <ReviewCard
                            key={index}
                            title={title}
                            location={location}
                            img={img}
                            text={text}
                        />
                    );
                }
            )}
        </FlexWrapper>
    </Box>
);
