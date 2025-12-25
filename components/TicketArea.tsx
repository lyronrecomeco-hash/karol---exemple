
import React, { useState } from 'react';
import { RAFFLE_DATA } from '../constants';
import { ViewState } from '../types';

interface Props {
  onParticipate: (qty: number) => void;
  setView: (v: ViewState) => void;
}

const TicketArea: React.FC<Props> = ({ onParticipate, setView }) => {
  const [quantity, setQuantity] = useState<number>(55);

  const quickOptions = [50, 100, 500, 1000];

  const adjust = (val: number) => {
    setQuantity(prev => Math.max(1, prev + val));
  };

  return (
    <div id="ticket-selector" className="p-6 md:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#121212] p-4 rounded-3xl border border-white/5 shadow-xl">
        <div className="flex items-center space-x-4">
          <div className="bg-cyan-500/10 p-3 rounded-2xl border border-cyan-500/10">
            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-black text-white italic">Bilhetes</h2>
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">Escolha sua quantidade</p>
          </div>
        </div>
        
        <button 
          onClick={() => setView('numbers')}
          className="bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest py-3 px-6 rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
        >
          <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span>Ver meus bilhetes</span>
        </button>
      </div>

      <div className="bg-[#121212] border border-white/5 rounded-[2.5rem] p-8 space-y-8 shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setQuantity(opt)}
              className={`py-5 rounded-2xl border transition-all flex flex-col items-center justify-center ${
                quantity === opt 
                  ? 'bg-cyan-500/10 border-cyan-500/50 shadow-lg shadow-cyan-500/10' 
                  : 'bg-white/5 border-transparent hover:bg-white/10'
              }`}
            >
              <span className="text-[10px] uppercase font-black text-gray-500 tracking-tighter">Adicionar</span>
              <span className={`text-xl font-black ${quantity === opt ? 'text-cyan-400' : 'text-white'}`}>+{opt}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center space-x-6">
          <button 
            onClick={() => adjust(-1)}
            className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 active:scale-90 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
            </svg>
          </button>
          
          <div className="bg-white/5 border border-white/10 px-10 py-4 rounded-2xl min-w-[140px] text-center shadow-inner">
            <span className="text-3xl font-black text-white font-mono tracking-tighter">{quantity}</span>
          </div>

          <button 
            onClick={() => adjust(1)}
            className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 active:scale-90 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>

        <button 
          onClick={() => onParticipate(quantity)}
          className="w-full py-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[1.5rem] font-black text-sm md:text-base text-white shadow-2xl shadow-cyan-500/20 active:scale-[0.98] transition-all flex items-center justify-center italic tracking-widest"
        >
          PARTICIPAR AGORA ({(quantity * RAFFLE_DATA.pricePerTicket).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })})
        </button>
      </div>
    </div>
  );
};

export default TicketArea;
