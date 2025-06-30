import React from 'react';
import { Trophy, RotateCcw, Star, Target } from 'lucide-react';

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export default function ResultsScreen({ score, totalQuestions, onRestart }: ResultsScreenProps) {
  const percentage = Math.round((score / (totalQuestions * 100)) * 100);
  
  const getPerformanceMessage = () => {
    if (percentage >= 90) return { message: "Excepcional! Você é um mestre do quiz!", icon: Trophy, color: "text-yellow-400", bgColor: "bg-yellow-300" };
    if (percentage >= 70) return { message: "Ótimo trabalho! Muito bem!", icon: Star, color: "text-green-400", bgColor: "bg-green-300" };
    if (percentage >= 50) return { message: "Bom esforço! Continue praticando!", icon: Target, color: "text-blue-400", bgColor: "bg-blue-300" };
    return { message: "Boa tentativa! A prática leva à perfeição!", icon: Target, color: "text-purple-400", bgColor: "bg-purple-300" };
  };

  const performance = getPerformanceMessage();
  const Icon = performance.icon;

  return (
    <div className="min-h-screen bg-rose-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-lg w-full text-center">
        <div className="mb-8">
          <div className={`rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center ${performance.bgColor}`}>
            <Icon className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Quiz Concluído!</h1>
          <p className={`text-xl font-semibold mb-2 ${performance.color}`}>
            {performance.message}
          </p>
        </div>

        <div className="bg-purple-50 rounded-2xl p-8 mb-8">
          <div className="text-center mb-6">
            <div className="text-6xl font-bold text-purple-400 mb-2">{percentage}%</div>
            <p className="text-gray-600 text-lg">Pontuação Final</p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-800">{score}</div>
              <p className="text-gray-600 text-sm">Pontos Obtidos</p>
            </div>
            <div className="border-l border-r border-purple-200 px-4">
              <div className="text-2xl font-bold text-gray-800">{Math.round(score / 100)}</div>
              <p className="text-gray-600 text-sm">Respostas Corretas</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">{totalQuestions}</div>
              <p className="text-gray-600 text-sm">Total de Perguntas</p>
            </div>
          </div>
        </div>

        <button
          onClick={onRestart}
          className="bg-purple-300 hover:bg-purple-400 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 w-full"
        >
          <RotateCcw className="w-6 h-6" />
          <span>Tentar Novamente</span>
        </button>

        <p className="text-gray-500 text-sm mt-6">
          Desafie-se a superar sua pontuação!
        </p>
      </div>
    </div>
  );
}