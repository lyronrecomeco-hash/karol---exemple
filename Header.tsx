
import React from 'react';
import { ViewState } from '../types';

interface Props {
  setView: (v: ViewState) => void;
}

const Header: React.FC<Props> = ({ setView }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 py-4 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div 
          onClick={() => setView('home')} 
          className="cursor-pointer flex items-center group transition-transform active:scale-95"
        >
          <div className="bg-white px-3 py-1.5 rounded flex items-center space-x-1 shadow-lg shadow-white/5">
            <span className="text-black font-black text-xs md:text-sm tracking-tighter italic">KAROL - VAQUINHA</span>
          </div>
        </div>

        <div className="flex space-x-3">
          <button 
            onClick={() => setView('campaigns')}
            className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 hover:border-cyan-500/30 transition-all text-gray-300"
          >
            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="hidden sm:inline">Campanhas</span>
            <span className="sm:hidden">Sorteios</span>
          </button>
          
          <button 
            onClick={() => setView('contact')}
            className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all text-gray-300"
          >
            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="hidden sm:inline">Suporte</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
