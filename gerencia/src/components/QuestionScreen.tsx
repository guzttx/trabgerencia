import React from 'react';
import { Question } from '../types/quiz';
import Timer from './Timer';
import { CheckCircle, XCircle, AlertCircle, ArrowRight } from 'lucide-react';

interface QuestionScreenProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  timeLeft: number;
  selectedAnswer: number | null;
  showResult: boolean;
  onAnswerSelect: (answerIndex: number) => void;
  onNextQuestion: () => void;
}

export default function QuestionScreen({
  question,
  currentQuestion,
  totalQuestions,
  timeLeft,
  selectedAnswer,
  showResult,
  onAnswerSelect,
  onNextQuestion
}: QuestionScreenProps) {
  const answerColors = [
    'bg-red-300 hover:bg-red-400',
    'bg-blue-300 hover:bg-blue-400',
    'bg-yellow-300 hover:bg-yellow-400',
    'bg-green-300 hover:bg-green-400'
  ];
  
  const getAnswerClasses = (index: number) => {
    let baseClasses = "w-full p-4 rounded-2xl font-bold text-white text-left transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-4";
    
    if (showResult) {
      if (index === question.correctAnswer) {
        return baseClasses + " bg-green-300 scale-105 ring-4 ring-green-200";
      } else if (index === selectedAnswer && index !== question.correctAnswer) {
        return baseClasses + " bg-red-300 scale-95 opacity-75";
      } else {
        return baseClasses + " " + answerColors[index] + " opacity-50";
      }
    } else if (selectedAnswer === index) {
      return baseClasses + " " + answerColors[index] + " scale-105 ring-4 ring-white ring-opacity-50";
    } else {
      return baseClasses + " " + answerColors[index];
    }
  };

  const isCorrectAnswer = selectedAnswer === question.correctAnswer;
  const showFeedback = showResult && selectedAnswer !== null;

  return (
    <div className="min-h-screen bg-rose-200 p-4 flex flex-col">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 mb-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
              Pergunta {currentQuestion + 1} de {totalQuestions}
            </span>
          </div>
          {!showResult && <Timer timeLeft={timeLeft} totalTime={question.timeLimit} />}
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-purple-300 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col">
        <div className="bg-white rounded-2xl p-8 mb-6 shadow-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
            {question.question}
          </h2>
        </div>

        {/* Answer options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto w-full mb-6">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showResult && onAnswerSelect(index)}
              disabled={showResult}
              className={getAnswerClasses(index)}
            >
              <span className="text-lg flex-1">{option}</span>
              {showResult && index === question.correctAnswer && (
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
              )}
              {showResult && index === selectedAnswer && index !== question.correctAnswer && (
                <XCircle className="w-6 h-6 text-white flex-shrink-0" />
              )}
            </button>
          ))}
        </div>

        {/* Feedback Section */}
        {showFeedback && (
          <div className="max-w-4xl mx-auto w-full">
            <div className={`rounded-2xl p-6 shadow-xl ${
              isCorrectAnswer 
                ? 'bg-green-50 border-2 border-green-200' 
                : 'bg-red-50 border-2 border-red-200'
            }`}>
              <div className="flex items-start space-x-4">
                <div className={`rounded-full p-2 ${
                  isCorrectAnswer ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {isCorrectAnswer ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <AlertCircle className="w-6 h-6 text-red-500" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-bold mb-3 ${
                    isCorrectAnswer ? 'text-green-700' : 'text-red-700'
                  }`}>
                    {isCorrectAnswer ? 'Correto!' : 'Incorreto'}
                  </h3>
                  
                  {!isCorrectAnswer && selectedAnswer !== null && (
                    <div className="mb-4 p-4 bg-red-100 rounded-lg border border-red-200">
                      <p className="text-red-700 font-semibold mb-2">
                        Sua resposta: "{question.options[selectedAnswer]}"
                      </p>
                      <p className="text-red-600 text-sm">
                        {question.wrongAnswerExplanations[selectedAnswer]}
                      </p>
                    </div>
                  )}
                  
                  {!isCorrectAnswer && (
                    <div className="mb-4 p-4 bg-green-100 rounded-lg border border-green-200">
                      <p className="text-green-700 font-semibold mb-2">
                        Resposta correta: "{question.options[question.correctAnswer]}"
                      </p>
                    </div>
                  )}
                  
                  <div className={`p-4 rounded-lg mb-6 ${
                    isCorrectAnswer ? 'bg-green-100 border border-green-200' : 'bg-blue-100 border border-blue-200'
                  }`}>
                    <p className={`font-semibold mb-2 ${
                      isCorrectAnswer ? 'text-green-700' : 'text-blue-700'
                    }`}>
                      Explicação:
                    </p>
                    <p className={`leading-relaxed ${
                      isCorrectAnswer ? 'text-green-600' : 'text-blue-600'
                    }`}>
                      {question.explanation}
                    </p>
                  </div>

                  {/* Next Question Button */}
                  <div className="flex justify-center">
                    <button
                      onClick={onNextQuestion}
                      className="bg-purple-300 hover:bg-purple-400 text-white font-bold py-3 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3"
                    >
                      <span>
                        {currentQuestion + 1 >= totalQuestions ? 'Ver Resultados' : 'Próxima Pergunta'}
                      </span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Time's Up Feedback */}
        {showResult && selectedAnswer === null && (
          <div className="max-w-4xl mx-auto w-full">
            <div className="rounded-2xl p-6 shadow-xl bg-orange-50 border-2 border-orange-200">
              <div className="flex items-start space-x-4">
                <div className="rounded-full p-2 bg-orange-100">
                  <AlertCircle className="w-6 h-6 text-orange-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-3 text-orange-700">
                    Tempo Esgotado!
                  </h3>
                  
                  <div className="mb-4 p-4 bg-green-100 rounded-lg border border-green-200">
                    <p className="text-green-700 font-semibold mb-2">
                      Resposta correta: "{question.options[question.correctAnswer]}"
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg mb-6 bg-blue-100 border border-blue-200">
                    <p className="font-semibold mb-2 text-blue-700">
                      Explicação:
                    </p>
                    <p className="leading-relaxed text-blue-600">
                      {question.explanation}
                    </p>
                  </div>

                  {/* Next Question Button */}
                  <div className="flex justify-center">
                    <button
                      onClick={onNextQuestion}
                      className="bg-purple-300 hover:bg-purple-400 text-white font-bold py-3 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3"
                    >
                      <span>
                        {currentQuestion + 1 >= totalQuestions ? 'Ver Resultados' : 'Próxima Pergunta'}
                      </span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}