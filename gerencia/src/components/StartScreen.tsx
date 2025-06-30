import React from 'react';
import { Play, Trophy, Users, Zap } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
  totalQuestions: number;
}

export default function StartScreen({ onStart, totalQuestions }: StartScreenProps) {
  return (
    <div className="min-h-screen bg-rose-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center transform hover:scale-105 transition-transform duration-300">
        <div className="mb-8">
          <div className="bg-purple-300 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Quiz <span className="text-purple-400">Ágil</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Teste seus conhecimentos sobre metodologias ágeis, Scrum e práticas modernas de desenvolvimento de software!
          </p>
        </div>

        <div className="bg-purple-50 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-center space-x-6 text-gray-700">
            <div className="text-center">
              <Users className="w-6 h-6 mx-auto mb-2 text-purple-400" />
              <p className="text-sm font-medium">Perguntas</p>
              <p className="text-xl font-bold">{totalQuestions}</p>
            </div>
            <div className="w-px h-12 bg-purple-200"></div>
            <div className="text-center">
              <Trophy className="w-6 h-6 mx-auto mb-2 text-purple-400" />
              <p className="text-sm font-medium">Pontuação Máx.</p>
              <p className="text-xl font-bold">{totalQuestions * 100}+</p>
            </div>
          </div>
        </div>

        <button
          onClick={onStart}
          className="bg-purple-300 hover:bg-purple-400 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 w-full"
        >
          <Play className="w-6 h-6" />
          <span>Iniciar Quiz</span>
        </button>

        <p className="text-gray-500 text-sm mt-6">
          Responda rapidamente para ganhar pontos bônus! Aprenda com explicações detalhadas.
        </p>
      </div>
    </div>
  );
}