import { Button } from '@mui/material';
import { useQuestionData } from '../hooks/useQuestionData';
import { useQuestionsStore } from '../store/preguntas';

export const Footer = () => {
  const { correctas, incorrectas, sinResponder } = useQuestionData();
  const resetear = useQuestionsStore((state) => state.resetear);
  return (
    <footer style={{ marginTop: '16px', textAlign:'center' }}>
      <strong>
        {`✅ ${correctas} Correctas -- ❌ ${incorrectas} Incorrectas -- ❓ ${sinResponder} sin Responder`}
      </strong>

      {/* resetear */}
      <div style={{ marginTop: '16px', textAlign: 'center' }}>
        <Button onClick={resetear} variant="contained" color="warning">
          Resetear juego
        </Button>
      </div>
    </footer>
  );
};
