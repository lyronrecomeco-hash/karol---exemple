
export interface Raffle {
  id: string;
  title: string;
  subtitle: string;
  images: string[];
  pricePerTicket: number;
  totalTickets: number;
  soldTickets: number;
  status: 'active' | 'closed';
  description: string;
  technicalSpecs: string[];
  rules: string[];
}

export interface PastRaffle {
  id: string;
  title: string;
  image: string;
  winnerNumber: string;
  winnerName?: string;
}

export interface Purchase {
  id: string;
  raffleId: string;
  userId: string;
  quantity: number;
  amount: number;
  status: 'pending' | 'paid' | 'completed';
  numbers: string[];
  timestamp: number;
}

export interface Winner {
  position: number;
  name: string;
  number: string;
  prize: string;
  date: string;
  avatar: string;
}

export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning';
  message: string;
  isDemo: boolean;
  timestamp: number;
}

export type ViewState = 'home' | 'campaigns' | 'numbers' | 'winners' | 'contact';
