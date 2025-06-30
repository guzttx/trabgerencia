import React, { useState, useEffect, useCallback } from 'react';
import { GameScreen, QuizState } from './types/quiz';
import { quizQuestions } from './data/questions';
import StartScreen from './components/StartScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultsScreen from './components/ResultsScreen';

function App() {
  const [gameScreen, setGameScreen] = useState<GameScreen>('start');
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    timeLeft: 0,
    isAnswered: false,
    selectedAnswer: null,
    showResult: false
  });

  // Initialize timer for current question
  const initializeTimer = useCallback(() => {
    if (quizState.currentQuestion < quizQuestions.length) {
      setQuizState(prev => ({
        ...prev,
        timeLeft: quizQuestions[prev.currentQuestion].timeLimit,
        isAnswered: false,
        selectedAnswer: null,
        showResult: false
      }));
    }
  }, [quizState.currentQuestion]);

  // Timer effect
  useEffect(() => {
    if (gameScreen === 'playing' && quizState.timeLeft > 0 && !quizState.isAnswered) {
      const timer = setTimeout(() => {
        setQuizState(prev => ({
          ...prev,
          timeLeft: prev.timeLeft - 1
        }));
      }, 1000);

      return () => clearTimeout(timer);
    } else if (gameScreen === 'playing' && quizState.timeLeft === 0 && !quizState.isAnswered) {
      // Time's up
      handleTimeUp();
    }
  }, [gameScreen, quizState.timeLeft, quizState.isAnswered]);

  const startQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      score: 0,
      timeLeft: quizQuestions[0].timeLimit,
      isAnswered: false,
      selectedAnswer: null,
      showResult: false
    });
    setGameScreen('playing');
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (quizState.isAnswered) return;

    const currentQ = quizQuestions[quizState.currentQuestion];
    const isCorrect = answerIndex === currentQ.correctAnswer;
    const timeBonus = Math.max(0, quizState.timeLeft * 2); // Bonus points for quick answers
    const points = isCorrect ? 100 + timeBonus : 0;

    setQuizState(prev => ({
      ...prev,
      selectedAnswer: answerIndex,
      isAnswered: true,
      showResult: true,
      score: prev.score + points
    }));
  };

  const handleTimeUp = () => {
    setQuizState(prev => ({
      ...prev,
      isAnswered: true,
      showResult: true
    }));
  };

  const nextQuestion = () => {
    const nextQuestionIndex = quizState.currentQuestion + 1;
    
    if (nextQuestionIndex >= quizQuestions.length) {
      // Quiz finished
      setGameScreen('results');
    } else {
      // Move to next question
      setQuizState(prev => ({
        ...prev,
        currentQuestion: nextQuestionIndex,
        timeLeft: quizQuestions[nextQuestionIndex].timeLimit,
        isAnswered: false,
        selectedAnswer: null,
        showResult: false
      }));
    }
  };

  const restartQuiz = () => {
    setGameScreen('start');
    setQuizState({
      currentQuestion: 0,
      score: 0,
      timeLeft: 0,
      isAnswered: false,
      selectedAnswer: null,
      showResult: false
    });
  };

  return (
    <div className="font-sans">
      {gameScreen === 'start' && (
        <StartScreen 
          onStart={startQuiz} 
          totalQuestions={quizQuestions.length}
        />
      )}
      
      {gameScreen === 'playing' && (
        <QuestionScreen
          question={quizQuestions[quizState.currentQuestion]}
          currentQuestion={quizState.currentQuestion}
          totalQuestions={quizQuestions.length}
          timeLeft={quizState.timeLeft}
          selectedAnswer={quizState.selectedAnswer}
          showResult={quizState.showResult}
          onAnswerSelect={handleAnswerSelect}
          onNextQuestion={nextQuestion}
        />
      )}
      
      {gameScreen === 'results' && (
        <ResultsScreen
          score={quizState.score}
          totalQuestions={quizQuestions.length}
          onRestart={restartQuiz}
        />
      )}
    </div>
  );
}

export default App;