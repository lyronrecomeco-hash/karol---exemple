
import React from 'react';
import { MOCK_WINNERS } from '../constants';

const WinnersView: React.FC = () => {
  return (
    <div className="p-6 md:p-10 space-y-12 min-h-screen pb-32">
      <div className="space-y-3">
        <h2 className="text-3xl font-black text-white italic tracking-tighter">HALL DA <span className="text-cyan-400">FAMA</span></h2>
        <div className="flex items-center space-x-2">
          <span className="w-10 h-1 bg-cyan-500 rounded-full" />
          <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.25em]">Sorteados por Karol - Vaquinha</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {MOCK_WINNERS.map((w) => (
          <div key={w.position} className="relative group">
            {/* Badge de Posição Elevada */}
            <div className={`absolute -top-4 -left-3 z-20 w-12 h-12 rounded-[1.2rem] flex items-center justify-center font-black text-xl shadow-2xl border-2 border-white/10 ${
              w.position === 1 ? 'bg-gradient-to-br from-yellow-400 to-orange-600 text-white' :
              w.position === 2 ? 'bg-gradient-to-br from-slate-300 to-slate-500 text-white' :
              'bg-gradient-to-br from-orange-800 to-orange-950 text-white'
            }`}>
              {w.position}º
            </div>

            <div className="bg-[#121212] rounded-[2.5rem] p-6 border border-white/5 hover:border-cyan-500/40 transition-all duration-500 shadow-2xl group-hover:bg-[#151515]">
              <div className="flex items-center space-x-6">
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-2 bg-cyan-500 rounded-full blur-xl opacity-0 group-hover:opacity-10 transition-opacity" />
                  <img src={w.avatar} alt={w.name} className="relative w-20 h-20 rounded-[1.8rem] object-cover border-2 border-white/5 shadow-inner" />
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="font-black text-white text-lg tracking-tight leading-none">{w.name}</h3>
                    <span className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">{w.date}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-cyan-500/10 px-3 py-1 rounded-lg inline-block border border-cyan-500/10">
                      <p className="text-[10px] text-cyan-400 font-black uppercase tracking-widest">{w.prize}</p>
                    </div>
                    <div className="flex items-center space-x-2 pt-1">
                      <span className="text-[9px] text-gray-500 font-black uppercase tracking-tighter">Bilhete Premiado:</span>
                      <span className="px-3 py-1 bg-white/5 rounded-lg text-xs font-mono font-black text-white border border-white/5 group-hover:border-cyan-500/20">{w.number}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-10 bg-[#121212] rounded-[3rem] text-center space-y-6 border border-white/5 shadow-2xl">
        <div className="w-20 h-20 bg-cyan-500/10 rounded-3xl flex items-center justify-center mx-auto text-cyan-400 border border-cyan-500/10 shadow-inner group cursor-default transition-transform hover:scale-105">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04c-.49 0-.96.06-1.402.17a11.98 11.98 0 00-2.08 3.23c-.503 1.13-.753 2.32-.753 3.52s.25 2.39.753 3.52c.5 1.12 1.2 2.22 2.08 3.23l.82.57c2.26 1.59 4.8 2.9 7.43 3.91l.34.13z" />
          </svg>
        </div>
        <div className="space-y-3">
          <h4 className="font-black text-white text-xl italic tracking-tighter">TRANSPARÊNCIA E FÉ</h4>
          <p className="text-sm text-gray-500 leading-relaxed max-w-lg mx-auto font-medium">
            Todos os nossos ganhadores são reais e os sorteios realizados com base na Loteria Federal. Sua segurança é nossa prioridade número um.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WinnersView;
