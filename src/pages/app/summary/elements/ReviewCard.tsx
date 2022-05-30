import React from 'react';
import { FlexWrapper, Typography, StarRating, Image } from 'components';

interface SuccessCardProps {
    title: string;
    location: string;
    img: string;
    text: string;
}

export const ReviewCard = ({
    title,
    location,
    img,
    text,
}: SuccessCardProps) => (
    <FlexWrapper
        flexDirection="column"
        borderRadius="br16"
        boxShadow="0rem 1rem 2rem rgba(57, 53, 60, 0.08);"
        width={{ _: '20rem', mobile: '100%' }}
        padding="1rem"
        margin={{ _: '', mobile: '0.625rem 0' }}
    >
        <Typography type="h4">{title}</Typography>
        <Typography type="body16">{location}</Typography>
        <StarRating />
        <Image src={img} alt={img} width="100%" />
        <Typography type="body16">{text}</Typography>
    </FlexWrapper>
);
