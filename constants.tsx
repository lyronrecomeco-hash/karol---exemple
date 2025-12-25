
import { Raffle, Winner, PastRaffle } from './types';

export const RAFFLE_DATA: Raffle = {
  id: '1',
  title: 'S-10 DIESEL 4X4',
  subtitle: 'Por apenas R$ 0,09',
  images: [
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?auto=format&fit=crop&q=80&w=800'
  ],
  pricePerTicket: 0.09,
  totalTickets: 2000000,
  soldTickets: 450000,
  status: 'active',
  description: 'ADQUIRA SUA COTA E ACOMPANHE TODO O PROJETO NO NOSSO INSTAGRAM @karol_vaquinhas. COTAS SÃO GERADAS ALEATORIAMENTE. PARA VER SEUS BILHETES, BASTA IR NA OPÇÃO (VER MEUS BILHETES) NO PRÓPRIO SITE. ENTREGA DO VEÍCULO SERÁ TOTALMENTE GRÁTIS.',
  technicalSpecs: [
    'Motor: 2.8 Turbo Diesel',
    'Tração: 4x4 com Reduzida',
    'Câmbio: Automático 6 marchas',
    'Ano: 2023/2024',
    'Acessórios: Lift 2", Pneus BF Goodrich'
  ],
  rules: [
    'Prêmio principal: Uma S-10 Diesel 4x4',
    'Entrega do veículo totalmente grátis',
    'Cotas geradas aleatoriamente',
    'Sorteio via Loteria Federal'
  ]
};

export const PAST_RAFFLES: PastRaffle[] = [
  { id: 'p1', title: 'PROJETO STRADA FREEDOM BRT', image: 'https://images.unsplash.com/photo-1593122182206-880988636a0d?w=400', winnerNumber: '14386' },
  { id: 'p2', title: 'AÇÃO SAVEIRO BRT', image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400', winnerNumber: '32451' },
  { id: 'p3', title: '02 RAPIDINHA SALÁRIO MÍNIMO', image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400', winnerNumber: '7561' },
  { id: 'p4', title: '01 RAPIDINHA DE R$ 2.000,00', image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=400', winnerNumber: '71833' },
  { id: 'p5', title: 'DODGE RAM DIESEL 5.9 CUMMINS', image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400', winnerNumber: '732183' }
];

export const MOCK_WINNERS: Winner[] = [
  {
    position: 1,
    name: 'Carlos Eduardo',
    number: '054.386',
    prize: 'S-10 Diesel 4x4',
    date: '12/03/2024',
    avatar: 'https://i.pravatar.cc/150?u=carlos'
  },
  {
    position: 2,
    name: 'Fernanda Lima',
    number: '71.833',
    prize: 'R$ 10.000,00',
    date: '10/03/2024',
    avatar: 'https://i.pravatar.cc/150?u=fernanda'
  },
  {
    position: 3,
    name: 'Bruno Silva',
    number: '32.451',
    prize: 'iPhone 15 Pro Max',
    date: '05/03/2024',
    avatar: 'https://i.pravatar.cc/150?u=bruno'
  }
];
