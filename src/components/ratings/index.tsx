import React, { useState } from 'react';
import { Box, FlexWrapper, Button } from 'components';

export const StarRating = () => {
    const [rating, setRating] = useState(5);
    return (
        <FlexWrapper alignItems="flex-start">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <Button
                        type="button"
                        key={index}
                        backgroundColor="white"
                        color={index <= rating ? 'orange' : 'white'}
                        onClick={() => setRating(index)}
                    >
                        <Box height="24px" width="24px">
                            &#9733;
                        </Box>
                    </Button>
                );
            })}
        </FlexWrapper>
    );
};
