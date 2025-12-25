
import { Raffle, Winner, PastRaffle } from './types';

export const RAFFLE_DATA: Raffle = {
  id: '1',
  title: 'S-10 DIESEL 4X4',
  subtitle: 'Apenas R$ 0,09 por cota',
  images: [
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?auto=format&fit=crop&q=80&w=800'
  ],
  pricePerTicket: 0.09,
  totalTickets: 2000000,
  soldTickets: 1542000,
  status: 'active',
  description: 'ADQUIRA SUA COTA E ACOMPANHE TODO O PROJETO NO NOSSO INSTAGRAM @karol_vaquinhas. COTAS SÃO GERADAS ALEATORIAMENTE. ENTREGA DO VEÍCULO SERÁ TOTALMENTE GRÁTIS EM TODO O BRASIL.',
  technicalSpecs: [
    'Motor: 2.8 Turbo Diesel',
    'Tração: 4x4 com Reduzida',
    'Câmbio: Automático 6 marchas',
    'Acessórios: Lift 2", Pneus BF Goodrich'
  ],
  rules: [
    'Prêmio: S-10 Diesel 4x4 ou R$ 150.000 no PIX',
    'Frete grátis para todo o Brasil',
    'Sorteio via Loteria Federal',
    'Pagamento imediato via PIX'
  ]
};

export const PAST_RAFFLES: PastRaffle[] = [
  { id: 'p1', title: 'PROJETO STRADA FREEDOM BRT', image: 'https://images.unsplash.com/photo-1593122182206-880988636a0d?w=400', winnerNumber: '143.864' },
  { id: 'p2', title: 'AÇÃO SAVEIRO CROSS G6', image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400', winnerNumber: '032.451' },
  { id: 'p3', title: '02 RAPIDINHA SALÁRIO MÍNIMO', image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400', winnerNumber: '007.561' },
  { id: 'p4', title: '01 RAPIDINHA DE R$ 2.000,00', image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=400', winnerNumber: '071.833' },
  { id: 'p5', title: 'DODGE RAM DIESEL 5.9 CUMMINS', image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400', winnerNumber: '732.183' }
];

export const MOCK_WINNERS: Winner[] = [
  {
    position: 1,
    name: 'Carlos Eduardo Oliveira',
    number: '143.864',
    prize: 'Strada Freedom BRT',
    date: '15/05/2024',
    avatar: 'https://i.pravatar.cc/150?u=carlos'
  },
  {
    position: 2,
    name: 'Fernanda Lima Souza',
    number: '071.833',
    prize: 'R$ 10.000,00 no PIX',
    date: '10/05/2024',
    avatar: 'https://i.pravatar.cc/150?u=fernanda'
  },
  {
    position: 3,
    name: 'Ricardo M. Santos',
    number: '032.451',
    prize: 'iPhone 15 Pro Max',
    date: '02/05/2024',
    avatar: 'https://i.pravatar.cc/150?u=ricardo'
  }
];
