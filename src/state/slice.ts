import { QuizAnswers, QuizState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchQuizQuestions, fetchRacquets, postQuizAnswers } from './thunks';

const initialState: QuizState = {
    quiz_answers: [
        {
            id: null as unknown as number | undefined,
            answer: null as unknown as string | string[] | undefined,
        },
    ],
    quiz_questions: [
        {
            id: null as unknown as number,
            question: null as unknown as string,
            answerOptions: [],
        },
    ],
    status: 'idle',
    error: undefined as unknown as string | undefined,
    racquets: [],
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setQuizAnswers: (
            state,
            action: PayloadAction<Partial<QuizAnswers>>
        ) => {
            const newAnswer = {
                id: action.payload.id,
                answer: action.payload.answer,
            };
            state.quiz_answers.push(newAnswer);
        },
        updateQuizAnswers: (
            state,
            action: PayloadAction<Partial<QuizAnswers>>
        ) => {
            const index = state.quiz_answers.findIndex(
                (answer) => answer.id === action.payload.id
            );
            state.quiz_answers[index] = {
                ...state.quiz_answers[index],
                answer: action.payload.answer,
            };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuizQuestions.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(
            fetchQuizQuestions.fulfilled,
            (state, action: PayloadAction<QuizState['quiz_questions']>) => {
                if (action.payload) {
                    state.quiz_questions = action.payload;
                    state.status = 'success';
                }
            }
        );
        builder.addCase(fetchQuizQuestions.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.error.message;
        });
        builder.addCase(fetchRacquets.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(
            fetchRacquets.fulfilled,
            (state, action: PayloadAction<QuizState['racquets']>) => {
                if (action.payload) {
                    state.racquets = action.payload;
                    state.status = 'success';
                }
            }
        );
        builder.addCase(fetchRacquets.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.error.message;
        });
        builder.addCase(postQuizAnswers.fulfilled, (state) => {
            state.status = 'success';
        });
    },
});

export const { setQuizAnswers, updateQuizAnswers } = quizSlice.actions;
export default quizSlice;

