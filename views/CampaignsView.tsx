
import React from 'react';
import { PAST_RAFFLES } from '../constants';
import { ViewState } from '../types';

interface Props {
  setView: (v: ViewState) => void;
}

const CampaignsView: React.FC<Props> = ({ setView }) => {
  return (
    <div className="p-6 md:p-8 space-y-10 min-h-screen">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-white/5 p-3 rounded-2xl border border-white/5 shadow-inner">
            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-black text-white tracking-tight">Campanhas</h2>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Escolha sua sorte</p>
          </div>
        </div>
      </div>

      {/* Sessão Campanhas Ativas (Vazia conforme print) */}
      <div className="bg-[#121212] border border-white/5 rounded-3xl p-12 flex flex-col items-center justify-center text-center space-y-4">
        <span className="text-5xl opacity-40">:(</span>
        <p className="text-gray-500 font-bold text-sm">Não há campanhas ativas no momento!</p>
      </div>

      {/* Últimos Sorteios */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="bg-white/5 p-2 rounded-lg">
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <h3 className="text-lg font-black text-white italic">Últimos sorteios</h3>
        </div>

        <div className="space-y-3">
          {PAST_RAFFLES.map((r) => (
            <div 
              key={r.id}
              className="bg-[#121212] border border-white/5 rounded-2xl p-4 flex items-center space-x-4 hover:border-cyan-500/20 transition-all cursor-pointer group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden flex-shrink-0">
                <img src={r.image} alt={r.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
              </div>
              <div className="flex-1 space-y-2">
                <h4 className="text-[11px] md:text-sm font-black text-gray-200 uppercase leading-tight">{r.title}</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-bold text-gray-500">🥇 1º lugar:</span>
                  <span className="bg-white/5 px-2 py-0.5 rounded text-[10px] font-black text-white font-mono">{r.winnerNumber}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all">
          Ver mais
        </button>
      </div>
    </div>
  );
};

export default CampaignsView;
