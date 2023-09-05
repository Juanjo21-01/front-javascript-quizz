import { Stack, IconButton } from '@mui/material';
import { useQuestionsStore } from '../store/preguntas';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { Footer } from './Footer';
import { Question } from './Pregunta';

export const Juego = () => {
  // variables de estado con zustand
  const preguntas = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);
  const goNextQuestion = useQuestionsStore((state) => state.goNextQuestion);
  const goPrevQuestion = useQuestionsStore((state) => state.goPrevQuestion);

  const questionInfo = preguntas[currentQuestion];

  return (
    <>
      {/* Paginacion */}
      <Stack
        direction="row"
        gap={2}
        alignItems="center"
        justifyContent="center"
      >
        <IconButton onClick={goPrevQuestion} disabled={currentQuestion === 0}>
          <ArrowBackIosNew />
        </IconButton>
        {`${currentQuestion + 1} / ${preguntas.length}`}
        <IconButton
          onClick={goNextQuestion}
          disabled={currentQuestion >= preguntas.length - 1}
        >
          <ArrowForwardIos />
        </IconButton>
      </Stack>

      {/* Pregunta */}
      <Question info={questionInfo} />

      {/* Footer */}
      <Footer />
    </>
  );
};
