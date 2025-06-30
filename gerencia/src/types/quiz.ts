export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  timeLimit: number;
  explanation: string;
  wrongAnswerExplanations: string[];
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  timeLeft: number;
  isAnswered: boolean;
  selectedAnswer: number | null;
  showResult: boolean;
}

export type GameScreen = 'start' | 'playing' | 'results';