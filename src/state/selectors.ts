import { AppState } from './types';

export const selectQuizAnswers = (state: AppState) => state.quiz.quiz_answers;

export const selectQuizQuestions = (state: AppState) =>
    state.quiz.quiz_questions;

export const selectRacquets = (state: AppState) => state.quiz.racquets;

