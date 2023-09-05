import './App.css';
import { Container, Stack, Typography } from '@mui/material';
import { JavaScriptLogo } from './components/JavaScriptLogo';
import { Inicio } from './components/Inicio';

function App() {
  return (
    <main>
      <Container maxWidth="sm">
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          {/* logo */}
          <JavaScriptLogo />

          <Typography variant="h2" component="h1">
            JavaScript Quizz con Zustand + Typescript
          </Typography>
        </Stack>

        {/* Empezar Quizz */}
        <Inicio />
      </Container>
    </main>
  );
}

export default App;
