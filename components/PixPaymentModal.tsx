
import React, { useState, useEffect } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  amount: number;
}

const PixPaymentModal: React.FC<Props> = ({ isOpen, onClose, onConfirm, amount }) => {
  const [step, setStep] = useState<'qr' | 'loading'>('qr');
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds

  useEffect(() => {
    if (!isOpen) {
      setStep('qr');
      setTimeLeft(1800);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSimulate = () => {
    setStep('loading');
    setTimeout(() => {
      onConfirm();
    }, 2500);
  };

  const progress = (timeLeft / 1800) * 100;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-[#0f0f0f] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in duration-300">
        <div className="p-8 space-y-6">
          {step === 'qr' ? (
            <>
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-white italic">PAGAMENTO PIX</h3>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Aguardando confirmação</p>
                </div>
                <button onClick={onClose} className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Timer & Progress */}
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Expira em:</span>
                  <span className="text-lg font-black text-cyan-400 font-mono">{formatTime(timeLeft)}</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-cyan-500 transition-all duration-1000"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="flex flex-col items-center space-y-6 py-2">
                <div className="bg-white p-4 rounded-3xl shadow-2xl shadow-cyan-500/10">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=simulate-pix-${amount}`} 
                    alt="PIX QR" 
                    className="w-40 h-40"
                  />
                </div>
                <div className="text-center">
                  <p className="text-3xl font-black text-white">
                    {amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </p>
                </div>
              </div>

              {/* Payment Tips */}
              <div className="bg-cyan-500/5 border border-cyan-500/10 rounded-2xl p-4 space-y-3">
                <h4 className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">Dicas de Pagamento</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2 text-[11px] text-gray-400">
                    <span className="text-cyan-400 mt-0.5">•</span>
                    <span>Copie o código abaixo e utilize a opção "Pix Copia e Cola" no seu banco.</span>
                  </li>
                  <li className="flex items-start space-x-2 text-[11px] text-gray-400">
                    <span className="text-cyan-400 mt-0.5">•</span>
                    <span>O processamento é instantâneo e seus números saem na hora.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <button className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center space-x-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  <span>Copiar Código PIX</span>
                </button>
                <button 
                  onClick={handleSimulate}
                  className="w-full py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-white font-black shadow-lg shadow-cyan-500/20 active:scale-95 transition-all"
                >
                  Confirmar Pagamento (DEMO)
                </button>
              </div>
            </>
          ) : (
            <div className="py-20 flex flex-col items-center space-y-8">
              <div className="relative">
                <div className="w-20 h-20 border-4 border-cyan-500/10 border-t-cyan-500 rounded-full animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-full animate-pulse" />
                </div>
              </div>
              <div className="text-center space-y-2">
                <p className="text-2xl font-black text-white italic">PROCESSANDO...</p>
                <p className="text-gray-500 text-sm font-medium">Validando sua transação no Banco Central</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PixPaymentModal;
