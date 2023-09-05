import { useQuestionsStore } from "../store/preguntas";

export const useQuestionData = () => {
  const question = useQuestionsStore((state) => state.questions);

  let correctas = 0,
    incorrectas = 0,
    sinResponder = 0;

  question.forEach((q) => {
    if (q.userSelectedAnswer == null) sinResponder++;
    else if (q.userSelectedAnswer === q.correctAnswer) correctas++;
    else incorrectas++;
  });

  return { correctas, incorrectas, sinResponder };
};

