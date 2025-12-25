
import React from 'react';
import { RAFFLE_DATA } from '../constants';
import { ViewState } from '../types';
import HeroCarousel from '../components/HeroCarousel';
import TicketArea from '../components/TicketArea';

interface Props {
  onParticipate: (qty: number) => void;
  setView: (v: ViewState) => void;
}

const HomeView: React.FC<Props> = ({ onParticipate, setView }) => {
  return (
    <div className="pb-12 bg-[#0a0a0a]">
      <div className="relative">
        <HeroCarousel images={RAFFLE_DATA.images} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 -mt-12 md:-mt-16 relative z-10 max-w-6xl mx-auto">
          <div className="bg-[#121212] p-5 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-xl">
            <h2 className="text-xl font-black text-white italic">{RAFFLE_DATA.title}</h2>
            <p className="text-gray-400 text-xs mt-1">Por apenas <span className="bg-cyan-500/20 px-2 py-0.5 rounded text-cyan-400 font-bold ml-1 border border-cyan-500/20">R$ 0,09</span></p>
          </div>

          <div className="bg-[#121212] p-5 rounded-[2rem] border border-white/10 shadow-2xl flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest block">Redes sociais:</span>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-lg shadow-lg shadow-cyan-500/20" />
                <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-blue-600 rounded-lg shadow-lg shadow-blue-500/20" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <TicketArea onParticipate={onParticipate} setView={setView} />

      <div className="px-6 space-y-4">
        <div className="flex items-center space-x-3 mb-2">
          <div className="bg-white/5 p-2 rounded-xl border border-white/5">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
          <h3 className="text-lg font-black text-white italic">Prêmios</h3>
        </div>

        <div className="bg-[#121212] border border-white/5 rounded-3xl overflow-hidden">
          <div className="p-5 border-b border-white/5 flex items-center justify-between group cursor-default">
            <div className="flex items-center space-x-4">
              <span className="text-2xl drop-shadow-lg">🥇</span>
              <div className="space-y-0.5">
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block">1º Ganhador(a)</span>
                <span className="text-sm font-black text-white uppercase">{RAFFLE_DATA.title}</span>
              </div>
            </div>
          </div>
          <div className="p-5 flex flex-col space-y-3">
            <div className="flex items-center space-x-4">
              <span className="text-2xl drop-shadow-lg">🥈</span>
              <div className="space-y-0.5">
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block">2º Ganhador(a)</span>
                <span className="text-sm font-black text-white uppercase">R$ 10.000,00</span>
              </div>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/10 py-2 px-4 rounded-xl inline-flex self-start">
               <span className="text-[9px] text-cyan-400 font-black uppercase tracking-widest">🏆 MAIOR COMPRADOR DE BILHETES</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 mt-10 space-y-4">
        <div className="flex items-center space-x-3 mb-2">
          <div className="bg-white/5 p-2 rounded-xl border border-white/5">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>
          <h3 className="text-lg font-black text-white italic">Descrição</h3>
        </div>

        <div className="bg-[#121212] border border-white/5 rounded-3xl p-8 shadow-inner">
          <div className="space-y-5 text-xs font-bold leading-relaxed text-gray-300">
            <p className="flex items-center space-x-3 text-white">
              <span className="text-lg">💎</span>
              <span className="font-black italic">PRÊMIO PRINCIPAL: {RAFFLE_DATA.title}</span>
            </p>
            <div className="h-px w-full bg-white/5" />
            <p className="flex items-start space-x-2">
              <span className="text-cyan-500">•</span>
              <span>ACOMPANHE O PROJETO: @karol_vaquinhas</span>
            </p>
            <p className="flex items-start space-x-2">
              <span className="text-cyan-500">•</span>
              <span>GERAÇÃO DE COTAS 100% ALEATÓRIA</span>
            </p>
            <p className="flex items-start space-x-2">
              <span className="text-cyan-500">•</span>
              <span>CONSULTE SEUS BILHETES A QUALQUER MOMENTO</span>
            </p>
            <p className="flex items-start space-x-2">
              <span className="text-cyan-500">•</span>
              <span>ENTREGA NACIONAL TOTALMENTE GRÁTIS</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
