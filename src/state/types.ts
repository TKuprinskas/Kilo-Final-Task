import { Statuses } from 'typings/generalTypes';
import { rootReducer } from './store';

export interface QuizAnswers {
    id: number | undefined;
    answer: string | string[] | undefined;
}

export interface QuizQuestions {
    id: number;
    question: string;
    answerOptions: string[];
}

export interface Racquets {
    id: number | string | null;
    name: string;
    weight: string;
    headsize: string;
    balance: string;
    stringpattern: string;
    length: string;
    image: string;
    price: string;
    description: string;
}

export interface QuizState {
    quiz_answers: QuizAnswers[];
    quiz_questions: QuizQuestions[];
    status: Statuses;
    error: string | undefined;
    racquets: Racquets[];
}

export type AppState = ReturnType<typeof rootReducer>;

