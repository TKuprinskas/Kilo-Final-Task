import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { QuizAnswers } from './types';

const questionsURL =
    'https://6214c0d789fad53b1f1dc14a.mockapi.io/quizQuestions';
const quizURL = 'https://6214c0d789fad53b1f1dc14a.mockapi.io/quizAnswers';
const racquetsURL = 'https://6214c0d789fad53b1f1dc14a.mockapi.io/tennis';

const fetchQuizQuestionsPrefix = 'quiz/GET_QUIZ_QUESTIONS';
const fetchRacquetsPrefix = 'quiz/GET_RACQUETS';
const postQuestionAnswersPrefix = 'quiz/POST_QUIZ_ANSWERS';

export const fetchQuizQuestions = createAsyncThunk(
    fetchQuizQuestionsPrefix,
    async () => {
        try {
            const getData: AxiosResponse<any> = await axios.get(questionsURL);
            if (getData.status === 200) {
                return getData.data;
            } else {
                throw new Error('Error fetching quiz questions');
            }
        } catch (error) {
            console.log(error);
        }
    }
);

export const fetchRacquets = createAsyncThunk(fetchRacquetsPrefix, async () => {
    try {
        const getData: AxiosResponse<any> = await axios.get(racquetsURL);
        if (getData.status === 200) {
            return getData.data;
        } else {
            throw new Error('Error fetching racquets');
        }
    } catch (error) {
        console.log(error);
    }
});

export const postQuizAnswers = createAsyncThunk(
    postQuestionAnswersPrefix,
    async (answerData: QuizAnswers[], { rejectWithValue }) => {
        try {
            const postData = await axios({
                method: 'post',
                url: quizURL,
                data: answerData,
            });
            if (postData.status === 201) {
                return postData.data;
            } else {
                throw new Error('Error posting quiz answers');
            }
        } catch (e) {
            const errRes = (e as AxiosError).response;
            if (errRes) {
                return rejectWithValue(errRes.statusText);
            }
        }
    }
);

