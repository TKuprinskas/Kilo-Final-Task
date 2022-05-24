import React from 'react';
import { Button } from 'components';

interface SubmitProps {
    submitAnswers: () => void;
    disabled: boolean;
}

interface NextProps {
    nextQuestion: () => void;
    margin?: string;
}

interface PreviousProps {
    previousQuestion: () => void;
}

export const SubmitButton = ({ submitAnswers, disabled }: SubmitProps) => (
    <>
        <Button
            type="button"
            width={{ _: '11.25rem', mobile: '100%' }}
            height="2.5rem"
            color="white"
            backgroundColor="orange"
            onClick={submitAnswers}
            margin="0 0 0 1.25rem"
            disabled={disabled}
        >
            SUBMIT
        </Button>
    </>
);

export const NextButton = ({ margin, nextQuestion }: NextProps) => (
    <>
        <Button
            type="button"
            width={{ _: '11.25rem', mobile: '100%' }}
            height="2.5rem"
            color="white"
            backgroundColor="orange"
            onClick={nextQuestion}
            margin="0 0 0 1.25rem"
        >
            CONTINUE
        </Button>
    </>
);

export const PreviousButton = ({ previousQuestion }: PreviousProps) => (
    <>
        <Button
            type="button"
            width={{ _: '11.25rem', mobile: '100%' }}
            height="2.5rem"
            color="white"
            backgroundColor="orange"
            onClick={previousQuestion}
        >
            PREVIOUS
        </Button>
    </>
);
