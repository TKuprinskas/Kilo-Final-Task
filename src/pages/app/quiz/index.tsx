import React from 'react';
import { Helmet } from 'react-helmet-async';
import { QuizInfo } from './sections/Quiz';

const Quiz: React.FC = () => (
    <>
        <Helmet>
            <title>Quiz</title>
        </Helmet>
        <QuizInfo />
    </>
);

export default Quiz;
