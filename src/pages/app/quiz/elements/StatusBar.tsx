import React from 'react';
import {
    CurrentQuestion,
    QuizStatus,
    StatusBox,
    Type,
    Text,
} from 'pages/app/quiz/elements';

interface Props {
    isActive: number;
}

export const StatusBar: React.FC<Props> = ({ isActive }) => (
    <QuizStatus>
        <StatusBox>
            {CurrentQuestion.map(({ id, text }) => (
                <Type key={id} isActive={id === isActive ? true : false}>
                    <Text>{text}</Text>
                </Type>
            ))}
        </StatusBox>
    </QuizStatus>
);
