import { Container, Stack, Typography } from '@mui/material';
import { Inicio } from './components/Inicio';
import { useQuestionsStore } from './store/preguntas';
import { Juego } from './components/Juego';

function App() {
  // arreglo de preguntas
  const preguntas = useQuestionsStore((state) => state.questions);

  return (
    <Container maxWidth="sm">
      <Stack
        direction="row"
        gap={2}
        alignItems="center"
        justifyContent="center"
      >
        {/* logo */}
        <img src="/front-javascript-quizz/js.svg" alt="logo" />

        {/* titulo */}
        <Typography variant="h2" component="h1">
          JavaScript Quiz
        </Typography>
      </Stack>

      <p
        style={{ textAlign: 'center', marginTop: '0px', marginBottom: '25px' }}
      >
        Utilizando{' '}
        <a
          href="https://zustand-demo.pmnd.rs/"
          target="_blank"
          rel="noreferrer"
        >
          Zustand{' '}
        </a>
        + Typescript
      </p>

      {/* Empezar Quizz */}
      <div style={{ textAlign: 'center' }}>
        {preguntas.length === 0 && <Inicio />}
      </div>

      {/* Preguntas */}
      {preguntas.length > 0 && <Juego />}

      {/* ver codigo */}
      <a
        style={{ display: 'block', textAlign: 'center', marginTop: '50px' }}
        href="https://github.com/Juanjo21-01/front-javascript-quizz"
        target="_blank"
        rel="noreferrer"
      >
        - Ver codigo Aquí -
      </a>
    </Container>
  );
}

export default App;
