
import React from 'react';
import { ViewState } from '../types';

interface Props {
  activeView: ViewState;
  setView: (v: ViewState) => void;
}

const BottomNav: React.FC<Props> = ({ activeView, setView }) => {
  const items = [
    { id: 'home', label: 'Início', icon: (active: boolean) => (
      <svg className={`w-6 h-6 ${active ? 'text-cyan-400' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )},
    { id: 'campaigns', label: 'Campanhas', icon: (active: boolean) => (
      <svg className={`w-6 h-6 ${active ? 'text-cyan-400' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )},
    { id: 'winners', label: 'Ganhadores', icon: (active: boolean) => (
      <svg className={`w-6 h-6 ${active ? 'text-cyan-400' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )},
    { id: 'numbers', label: 'Meus Bilhetes', icon: (active: boolean) => (
      <svg className={`w-6 h-6 ${active ? 'text-cyan-400' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )}
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-lg mx-auto z-50 px-4 pb-6">
      <div className="bg-[#0f0f0f]/90 backdrop-blur-2xl border border-white/5 rounded-[2rem] pt-3 pb-3 px-2 flex justify-between items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => setView(item.id as ViewState)}
            className="flex flex-col items-center flex-1 space-y-1 transition-all duration-300"
          >
            <div className={`p-2 rounded-2xl transition-all ${activeView === item.id ? 'bg-cyan-500/10' : ''}`}>
              {item.icon(activeView === item.id)}
            </div>
            <span className={`text-[8px] font-black uppercase tracking-widest ${activeView === item.id ? 'text-cyan-400' : 'text-gray-600'}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
