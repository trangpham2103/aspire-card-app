import type { Transaction } from '@/types';

export const TRANSACTION_TYPES = {
  FILE_STORAGE: 'file-storage',
  FLIGHTS: 'flights',
  MEGAPHONE: 'megaphone',
};

export const DEFAULT_TRANSACTIONS: Transaction[] = [
  {
    id: 1,
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'Refund on debit card',
    amount: '+S$ 150',
    category: TRANSACTION_TYPES.FILE_STORAGE,
  },
  {
    id: 2,
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'Charged to debit card',
    amount: '-S$ 150',
    category: TRANSACTION_TYPES.FLIGHTS,
  },
  {
    id: 3,
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'Charged to debit card',
    amount: '-S$ 150',
    category: TRANSACTION_TYPES.MEGAPHONE,
  },
  {
    id: 4,
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'Charged to debit card',
    amount: '-S$ 150',
    category: TRANSACTION_TYPES.FILE_STORAGE,
  },
];