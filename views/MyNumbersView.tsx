
import React, { useState } from 'react';
import { Purchase } from '../types';

interface Props {
  purchases: Purchase[];
}

const MyNumbersView: React.FC<Props> = ({ purchases }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="p-6 space-y-8 min-h-screen">
      <div className="space-y-1">
        <h2 className="text-3xl font-black text-white">Meus Números</h2>
        <p className="text-gray-500">Histórico de participações e cotas.</p>
      </div>

      {purchases.length === 0 ? (
        <div className="py-20 flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-gray-600">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="space-y-1">
            <p className="text-lg font-bold text-white">Nenhum número encontrado</p>
            <p className="text-sm text-gray-500 px-10">Você ainda não participou de nenhum sorteio.</p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {purchases.map((p) => (
            <div key={p.id} className="glass rounded-3xl overflow-hidden border border-white/5 transition-all">
              <div 
                onClick={() => setExpandedId(expandedId === p.id ? null : p.id)}
                className="p-5 flex justify-between items-center cursor-pointer active:bg-white/5"
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold rounded uppercase">Pago</span>
                    <span className="text-xs text-gray-500">{new Date(p.timestamp).toLocaleDateString()}</span>
                  </div>
                  <h3 className="font-bold text-white">{p.quantity} Cotas Adquiridas</h3>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-bold text-cyan-400">#{p.id.toUpperCase()}</span>
                  <svg 
                    className={`w-5 h-5 text-gray-600 transition-transform ${expandedId === p.id ? 'rotate-180' : ''}`} 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {expandedId === p.id && (
                <div className="px-5 pb-5 pt-2 border-t border-white/5 animate-in slide-in-from-top-2 duration-300">
                  <div className="grid grid-cols-4 gap-2">
                    {p.numbers.map((num, idx) => (
                      <div key={idx} className="bg-white/5 p-2 rounded-lg text-center font-mono text-xs font-bold text-cyan-200">
                        {num}
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(p.numbers.join(', '));
                      alert('Números copiados para a área de transferência!');
                    }}
                    className="w-full mt-4 py-3 bg-white/5 rounded-xl text-xs font-bold text-gray-400 uppercase tracking-widest hover:bg-white/10 transition-colors"
                  >
                    Copiar Todos os Números
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyNumbersView;
