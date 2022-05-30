import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby-link';
import { useDispatch, useSelector } from 'react-redux';
import { setQuizAnswers, updateQuizAnswers } from 'state/slice';
import { selectQuizAnswers, selectQuizQuestions } from 'state/selectors';
import { fetchQuizQuestions, postQuizAnswers } from 'state/thunks';
import { FlexWrapper } from 'components';
import {
    Loader,
    SubmitButton,
    NextButton,
    PreviousButton,
    StatusBar,
    QuestionsAnswers,
} from '../elements';

export const QuizInfo: React.FC = () => {
    const dispatch = useDispatch();
    const answerData = useSelector(selectQuizAnswers);
    const quiz = useSelector(selectQuizQuestions);

    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<number>(0);
    const [answer5, setAnswer5] = useState<string[]>([]);
    const [answer6, setAnswer6] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(true);

    const handleAnswerState = (id: number, answer: string | string[]) =>
        dispatch(setQuizAnswers({ id, answer }));

    const handleUpdateAnswerState = (id: number, answer: string | string[]) =>
        dispatch(updateQuizAnswers({ id, answer }));

    useEffect(() => {
        dispatch(fetchQuizQuestions());
        setLoaded(true);
    }, []);

    const submitAnswers = async () => {
        setIsLoading(true);
        dispatch(postQuizAnswers(answerData));
        setTimeout(() => {
            navigate('/app/summary');
        }, 3000);
    };

    const setStateFunction = (answer: string, state: string[]) => {
        if (state.includes(answer)) {
            return state.filter((item) => item !== answer);
        } else {
            return [...state, answer];
        }
    };

    const handleAnswerClick = (id: number, answer: string) => {
        id === 8 ? setIsSubmitting(!isSubmitting) : null;
        const isIdAnswer = answerData.some((element: any) => {
            element.id === id && element.answer === answer ? true : false;
        });

        const isId = answerData.some((element: any) => {
            return element.id === id ? true : false;
        });

        if (id !== 5 && id !== 6) {
            if (isId) {
                handleUpdateAnswerState(id, answer);
                const nextQuestion = currentQuestion + 1;
                nextQuestion < quiz.length
                    ? setCurrentQuestion(nextQuestion)
                    : null;
                id === 8 ? null : setIsActive(nextQuestion);
            } else {
                handleAnswerState(id, answer);
                const nextQuestion = currentQuestion + 1;
                nextQuestion < quiz.length
                    ? setCurrentQuestion(nextQuestion)
                    : null;
                id === 8 ? null : setIsActive(nextQuestion);
            }
        } else if (id === 5) {
            if (isIdAnswer) {
                setAnswer5(setStateFunction(answer, answer5));
                handleUpdateAnswerState(id, answer5);
            } else if (isId) {
                setAnswer5(setStateFunction(answer, answer5));
                handleUpdateAnswerState(id, answer5);
            } else {
                setAnswer5(setStateFunction(answer, answer5));
                handleAnswerState(id, answer5);
            }
        } else if (id === 6) {
            if (isIdAnswer) {
                setAnswer6(setStateFunction(answer, answer6));
                handleUpdateAnswerState(id, answer6);
            } else if (isId) {
                setAnswer6(setStateFunction(answer, answer6));
                handleUpdateAnswerState(id, answer6);
            } else {
                setAnswer6(setStateFunction(answer, answer6));
                handleAnswerState(id, answer6);
            }
        }
    };

    const previousQuestion = () => {
        const previousQuestion = currentQuestion - 1;
        previousQuestion >= 0 ? setCurrentQuestion(previousQuestion) : null;
        setIsActive(previousQuestion);
    };

    const nextQuestion = () => {
        if (!answerData[currentQuestion + 1]) {
            return;
        } else {
            const nextQuestion = currentQuestion + 1;
            nextQuestion < quiz.length
                ? setCurrentQuestion(nextQuestion)
                : null;
            setIsActive(nextQuestion);
        }
    };

    const handleIsSelected = (answer: string, i: number) => {
        if (currentQuestion === 4) {
            return answer5.includes(answer) ? true : false;
        }

        if (currentQuestion === 5) {
            return answer6.includes(answer) ? true : false;
        }

        if (answerData[currentQuestion + 1]) {
            return answerData[currentQuestion + 1].answer === answer
                ? true
                : false;
        } else {
            return false;
        }
    };

    if (!loaded) {
        return null;
    }
    return (
        <FlexWrapper
            backgroundImage="background"
            minHeight="100vh"
            width="100%"
            flexDirection="column"
        >
            <StatusBar isActive={isActive} />
            <QuestionsAnswers
                quiz={quiz}
                currentQuestion={currentQuestion}
                handleAnswerClick={handleAnswerClick}
                handleIsSelected={handleIsSelected}
            />
            <FlexWrapper
                width={{ _: '100%', mobile: '90%' }}
                justifyContent="flex-start"
                alignItems="flex-end"
                margin={{ _: '0 0 0 6.25rem', mobile: '0 0 2rem 1.25rem' }}
            >
                {currentQuestion > 0 && (
                    <PreviousButton previousQuestion={previousQuestion} />
                )}

                {(currentQuestion < quiz.length - 1 && currentQuestion === 4) ||
                currentQuestion === 5 ? (
                    <NextButton nextQuestion={nextQuestion} />
                ) : null}

                {currentQuestion === quiz.length - 1 && currentQuestion > 0 ? (
                    <SubmitButton
                        disabled={isSubmitting}
                        submitAnswers={submitAnswers}
                    />
                ) : null}
            </FlexWrapper>
            {isLoading && <Loader />}
        </FlexWrapper>
    );
};
