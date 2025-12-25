
import React from 'react';
import { PAST_RAFFLES } from '../constants';
import { ViewState } from '../types';

interface Props {
  setView: (v: ViewState) => void;
}

const CampaignsView: React.FC<Props> = ({ setView }) => {
  return (
    <div className="p-6 md:p-8 space-y-10 min-h-screen pb-32">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-white/5 p-3 rounded-2xl border border-white/5 shadow-inner">
            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-black text-white tracking-tight italic uppercase">Campanhas</h2>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Sua sorte começa aqui</p>
          </div>
        </div>
      </div>

      {/* Campanhas Ativas (Espaço para futuras integrações) */}
      <div className="space-y-4">
        <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest px-1">Ativas</h3>
        <div className="bg-[#121212] border border-white/5 rounded-3xl p-12 flex flex-col items-center justify-center text-center space-y-4 shadow-2xl">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center">
            <span className="text-4xl opacity-40">:(</span>
          </div>
          <p className="text-gray-500 font-bold text-sm">Não há novas campanhas ativas no momento!</p>
        </div>
      </div>

      {/* Últimos Sorteios Realizados */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="bg-white/5 p-2 rounded-lg border border-white/5">
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <h3 className="text-lg font-black text-white italic uppercase tracking-tighter">Últimos sorteios</h3>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {PAST_RAFFLES.map((r) => (
            <div 
              key={r.id}
              className="bg-[#121212] border border-white/5 rounded-2xl p-4 flex items-center space-x-4 hover:border-cyan-500/30 transition-all cursor-pointer group shadow-lg"
            >
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-white/10">
                <img src={r.image} alt={r.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="flex-1 space-y-2">
                <h4 className="text-xs md:text-sm font-black text-gray-200 uppercase leading-tight tracking-tight">{r.title}</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-bold text-gray-500 uppercase">Bilhete:</span>
                  <span className="bg-cyan-500/10 px-3 py-1 rounded text-[10px] font-black text-cyan-400 font-mono border border-cyan-500/10">{r.winnerNumber}</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <svg className="w-5 h-5 text-gray-700 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full py-5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-all active:scale-95">
          Ver histórico completo
        </button>
      </div>
    </div>
  );
};

export default CampaignsView;
