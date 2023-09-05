import { create } from 'zustand';
import { Preguntas } from '../types';
import confetti from 'canvas-confetti';
import {persist} from 'zustand/middleware';

interface State {
    questions: Preguntas[];
    currentQuestion: number;
    fetchQuestions: (limit: number) => void;
    selectAnswer: (questionId: number, answerIndex: number) => void;
    goNextQuestion: () => void;
    goPrevQuestion: () => void;
    resetear: () => void;
}

export const useQuestionsStore = create<State>()(persist((set, get) => {
    return {
        questions: [],
        currentQuestion: 0,
        fetchQuestions: async (limit: number) => {
            const res = await fetch('data.json')
            const json = await res.json();

            const questions = json.sort(() => Math.random() - 0.5).slice(0, limit);
            set({  questions });
        },

        selectAnswer: (questionId: number, answerIndex: number) => {
            // obtener las preguntas
            const {questions} = get();
            // usar el structuredClone para clonar el array de preguntas
            const newQuestions = structuredClone(questions);

            // encontrar el indice de la pregunta
            const questionIndex = newQuestions.findIndex((q) => q.id === questionId);

            // obtener la pregunta
            const questionInfo = newQuestions[questionIndex];

            // si la pregunta es correcta
            const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex;

            // lanzar confetti
            if (isCorrectUserAnswer) confetti()

            //camnbiar esta info en la copia de la pregunta
            newQuestions[questionIndex] = {
                ...questionInfo,
                isCorrectUserAnswer,
                userSelectedAnswer: answerIndex,
            };

            // actualizar el estado
            set({ questions: newQuestions });

        },

        goNextQuestion: () => {
            const { questions, currentQuestion } = get();
            const nextQuestion = currentQuestion + 1;

            if (currentQuestion < questions.length - 1) {
                set({ currentQuestion: currentQuestion + 1 });
            }
        },
        goPrevQuestion: () => {
            const { currentQuestion } = get();
            if (currentQuestion > 0) {
                set({ currentQuestion: currentQuestion - 1 });
            }
            },
        resetear: () => {
                set({ currentQuestion: 0, questions: [] });
            },
        }
}, {
    name: 'questions-storage'
}))

