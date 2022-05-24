import React, { useEffect, useState } from 'react';
import { QuizQuestions } from 'state/types';
import { FlexWrapper, Box, Typography } from 'components';
import { AnswerBox } from '../elements';
import { useQuery } from 'styles/breakpoints';

interface Props {
    quiz: QuizQuestions[];
    currentQuestion: number;
    handleAnswerClick: (id: number, answer: string) => void;
    handleIsSelected: (answer: string, i: number) => void;
}

export const QuestionsAnswers: React.FC<Props> = ({
    quiz,
    currentQuestion,
    handleAnswerClick,
    handleIsSelected,
}: any) => {
    const { isTablet } = useQuery();
    return (
        <FlexWrapper
            padding={{
                _: '0 0 0 6.25rem',
                mobile: '0 0 0 1rem',
            }}
            width={{ _: '70%', mobile: '95%' }}
            flexDirection="column"
            margin={{
                _: '9.375rem 0 0 0',
                mobile: '1rem 0 0 0',
            }}
        >
            {quiz.map(({ id, question }: any, index: number) => (
                <Box key={id}>
                    {currentQuestion === index ? (
                        <>
                            <Typography
                                type="h1"
                                color="white"
                                fontStyle="italic"
                                textAlign={isTablet ? 'center' : 'left'}
                            >
                                {question}
                            </Typography>
                            {currentQuestion === 4 || currentQuestion === 5 ? (
                                <Typography
                                    type="body14"
                                    color="white"
                                    fontStyle="italic"
                                    textAlign={isTablet ? 'center' : 'left'}
                                >
                                    *MULTIPLE OPTIONS POSSIBLE
                                </Typography>
                            ) : null}
                            <FlexWrapper
                                margin={{
                                    _: '1.25rem 0',
                                    mobile: '1.25rem auto',
                                }}
                                flexDirection={{
                                    _: 'row',
                                    mobile: 'column',
                                }}
                            >
                                {quiz[index].answerOptions.map(
                                    (answer: any, i: number) => (
                                        <AnswerBox
                                            key={i}
                                            width={{
                                                _: '11.25rem',
                                                mobile: '100%',
                                            }}
                                            margin={{
                                                _: '0 1rem 0 0',
                                                mobile: '0.625rem 0',
                                            }}
                                            onClick={() =>
                                                handleAnswerClick(id, answer)
                                            }
                                            isSelected={handleIsSelected(
                                                answer,
                                                i
                                            )}
                                        >
                                            {answer}
                                        </AnswerBox>
                                    )
                                )}
                            </FlexWrapper>
                        </>
                    ) : null}
                </Box>
            ))}
        </FlexWrapper>
    );
};
