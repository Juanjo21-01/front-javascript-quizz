export interface Preguntas {
    id: number;
    question: string;
    answers: string[];
    correctAnswer: number;
    code: string;
    userSelectedAnswer?: number
  isCorrectUserAnswer?: boolean
}
