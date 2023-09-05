import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { type Preguntas as QuestionType } from '../types';
import { useQuestionsStore } from '../store/preguntas';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const getBackgroundColor = (info: QuestionType, index: number) => {
  const { userSelectedAnswer, correctAnswer } = info;

  // usuario no ha seleccionado nada
  if (userSelectedAnswer == null) return 'transparent';

  // si ya selecciono pero no es la respuesta correcta
  if (index !== correctAnswer && index !== userSelectedAnswer)
    return 'transparent';

  // respuesta correcta
  if (index === correctAnswer) return '#4caf50';

  // respuesta incorrecta
  if (index === userSelectedAnswer) return '#f44336';

  return 'transparent';
};
export const Question = ({ info }: { info: QuestionType }) => {
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer);

  const createHandleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex);
  };

  return (
    <Card
      variant="outlined"
      sx={{ bgcolor: '#222', p: 2, textAlign: 'left', marginTop: 4 }}
    >
      {/* Pregunta */}
      <Typography variant="h5">{info.question}</Typography>

      {/* Codigo */}
      <SyntaxHighlighter language="javascript" style={gradientDark}>
        {info.code}
      </SyntaxHighlighter>

      {/* Lista de respuestas */}
      <List sx={{ bgcolor: '#333' }}>
        {info.answers.map((answer, index) => (
          <ListItem key={index} disablePadding divider>
            <ListItemButton
              disabled={info.userSelectedAnswer != null}
              onClick={createHandleClick(index)}
              sx={{ backgroundColor: getBackgroundColor(info, index) }}
            >
              <ListItemText primary={answer} sx={{ textAlign: 'center' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};
