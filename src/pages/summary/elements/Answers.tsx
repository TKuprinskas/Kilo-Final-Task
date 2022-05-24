import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { selectQuizAnswers } from 'state/selectors';
import { Box, FlexWrapper, Typography } from 'components';
import { theme } from 'styles/theme';

const SPAN = styled.span`
    color: ${theme.colors.orange};
`;

export const Answers: React.FC = () => {
    const answers = useSelector(selectQuizAnswers);

    return (
        <FlexWrapper flexDirection="column">
            <FlexWrapper
                backgroundImage="results"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundPosition="top"
                height={{ _: '20rem', mobile: '9.375rem' }}
            />
            <Box width="75%" margin="1.25rem auto 0 auto">
                <Typography type="h3" textAlign="center">
                    Based on your answers and that you are{' '}
                    <SPAN>{answers[1].answer}</SPAN>, in the age group of{' '}
                    <SPAN>{answers[2].answer}</SPAN>, playing level being{' '}
                    <SPAN>{answers[3].answer}</SPAN>, with typical stroke being{' '}
                    <SPAN>{answers[4].answer}</SPAN>, here are the your best
                    matches:
                </Typography>
            </Box>
        </FlexWrapper>
    );
};
