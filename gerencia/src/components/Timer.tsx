import React from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  timeLeft: number;
  totalTime: number;
}

export default function Timer({ timeLeft, totalTime }: TimerProps) {
  const percentage = (timeLeft / totalTime) * 100;
  
  return (
    <div className="flex items-center space-x-3">
      <Clock className={`w-5 h-5 ${timeLeft <= 5 ? 'text-red-400' : 'text-gray-600'}`} />
      <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
        <div 
          className={`h-full transition-all duration-1000 ease-linear ${
            timeLeft <= 5 ? 'bg-red-300' : timeLeft <= 10 ? 'bg-yellow-300' : 'bg-green-300'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className={`font-bold text-lg min-w-[2rem] ${
        timeLeft <= 5 ? 'text-red-400' : 'text-gray-700'
      }`}>
        {timeLeft}
      </span>
    </div>
  );
}