
import React from 'react';
import { MOCK_WINNERS } from '../constants';

const WinnersView: React.FC = () => {
  return (
    <div className="p-6 md:p-10 space-y-12 min-h-screen">
      <div className="space-y-2">
        <h2 className="text-3xl font-black text-white italic tracking-tighter">GALERIA DE <span className="text-cyan-400">GANHADORES</span></h2>
        <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">Sonhos realizados por Karol Vaquinha</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_WINNERS.map((w) => (
          <div key={w.position} className="relative group perspective-1000">
            <div className={`absolute -top-4 -left-3 z-20 w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shadow-2xl border-2 border-white/10 ${
              w.position === 1 ? 'bg-gradient-to-br from-yellow-400 to-orange-600 text-white' :
              w.position === 2 ? 'bg-gradient-to-br from-slate-300 to-slate-500 text-white' :
              'bg-gradient-to-br from-orange-800 to-orange-950 text-white'
            }`}>
              {w.position}º
            </div>

            <div className="bg-[#121212] rounded-[2.5rem] p-6 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 shadow-xl group-hover:shadow-cyan-500/5">
              <div className="flex items-center space-x-6">
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition-opacity" />
                  <img src={w.avatar} alt={w.name} className="relative w-20 h-20 rounded-[1.8rem] object-cover border border-white/10" />
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-black text-white text-xl tracking-tight">{w.name}</h3>
                    <span className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">{w.date}</span>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-[10px] text-cyan-400 font-black uppercase tracking-wider">{w.prize}</p>
                    <div className="flex items-center space-x-2 pt-1">
                      <span className="text-[9px] text-gray-500 font-black uppercase tracking-tighter">Cota Sorteada:</span>
                      <span className="px-3 py-1 bg-white/5 rounded-lg text-xs font-mono font-black text-white border border-white/5">{w.number}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-10 bg-gradient-to-b from-[#121212] to-transparent rounded-[3rem] text-center space-y-6 border border-white/5">
        <div className="w-20 h-20 bg-cyan-500/10 rounded-3xl flex items-center justify-center mx-auto text-cyan-400 border border-cyan-500/10 shadow-inner">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04c-.49 0-.96.06-1.402.17a11.98 11.98 0 00-2.08 3.23c-.503 1.13-.753 2.32-.753 3.52s.25 2.39.753 3.52c.5 1.12 1.2 2.22 2.08 3.23l.82.57c2.26 1.59 4.8 2.9 7.43 3.91l.34.13z" />
          </svg>
        </div>
        <div className="space-y-2">
          <h4 className="font-black text-white text-xl italic">TRANSPARÊNCIA TOTAL</h4>
          <p className="text-sm text-gray-500 leading-relaxed max-w-lg mx-auto">
            Todos os nossos sorteios são realizados publicamente, baseados na extração da Loteria Federal, garantindo segurança jurídica e honestidade para todos os participantes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WinnersView;
