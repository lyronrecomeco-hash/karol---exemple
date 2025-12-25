
import React, { useState, useEffect } from 'react';
import { ViewState, Purchase, Notification } from './types';
import { RAFFLE_DATA } from './constants';
import HomeView from './views/HomeView';
import CampaignsView from './views/CampaignsView';
import MyNumbersView from './views/MyNumbersView';
import WinnersView from './views/WinnersView';
import ContactView from './views/ContactView';
import BottomNav from './components/BottomNav';
import NotificationToast from './components/NotificationToast';
import PixPaymentModal from './components/PixPaymentModal';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isPixModalOpen, setIsPixModalOpen] = useState(false);
  const [pendingQuantity, setPendingQuantity] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('karol_vaquinhas_purchases');
    if (saved) setPurchases(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('karol_vaquinhas_purchases', JSON.stringify(purchases));
  }, [purchases]);

  const handlePurchaseRequest = (quantity: number) => {
    setPendingQuantity(quantity);
    setIsPixModalOpen(true);
  };

  const confirmPurchase = () => {
    const numbers = Array.from({ length: pendingQuantity }, () => 
      Math.floor(Math.random() * RAFFLE_DATA.totalTickets).toString().padStart(7, '0')
    );
    const newPurchase: Purchase = {
      id: Math.random().toString(36).substr(2, 9),
      raffleId: RAFFLE_DATA.id,
      userId: 'current-user',
      quantity: pendingQuantity,
      amount: pendingQuantity * RAFFLE_DATA.pricePerTicket,
      status: 'completed',
      numbers: numbers,
      timestamp: Date.now()
    };
    setPurchases(prev => [newPurchase, ...prev]);
    setIsPixModalOpen(false);
    setCurrentView('numbers');
  };

  const renderView = () => {
    switch (currentView) {
      case 'home': return <HomeView onParticipate={handlePurchaseRequest} setView={setCurrentView} />;
      case 'campaigns': return <CampaignsView setView={setCurrentView} />;
      case 'numbers': return <MyNumbersView purchases={purchases} />;
      case 'winners': return <WinnersView />;
      case 'contact': return <ContactView />;
      default: return <HomeView onParticipate={handlePurchaseRequest} setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 flex flex-col w-full relative overflow-x-hidden">
      <Header setView={setCurrentView} />

      <main className="flex-1 w-full max-w-5xl mx-auto animate-in fade-in duration-500">
        {renderView()}
      </main>

      <Footer />
      
      <BottomNav activeView={currentView} setView={setCurrentView} />
      
      {notifications.map(n => <NotificationToast key={n.id} notification={n} />)}

      <PixPaymentModal 
        isOpen={isPixModalOpen} 
        onClose={() => setIsPixModalOpen(false)} 
        onConfirm={confirmPurchase}
        amount={pendingQuantity * RAFFLE_DATA.pricePerTicket}
      />
    </div>
  );
};

export default App;
