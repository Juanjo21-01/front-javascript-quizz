import { useQuestionsStore } from '../store/preguntas';
import { Button } from '@mui/material';
const LIMITE_PREGUNTAS = 10;

export const Inicio = () => {
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);

  const handleClick = () => {
    fetchQuestions(LIMITE_PREGUNTAS);
  };
  return (
    <Button onClick={handleClick} variant="contained">
      ¡Comencemos!
    </Button>
  );
};
