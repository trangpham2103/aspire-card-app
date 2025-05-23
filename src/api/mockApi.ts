import { DEFAULT_TRANSACTIONS } from '@/constants/transactionConstants';
import type { Card } from '@/types';
import type { Transaction } from '@/types';

export const generateCardNumber = (): string => {
  return `${Math.floor(1000 + Math.random() * 9000)} ${Math.floor(
    1000 + Math.random() * 9000
  )} ${Math.floor(1000 + Math.random() * 9000)} ${Math.floor(
    1000 + Math.random() * 9000
  )}`;
};

export const generateExpirationDate = (): string => {
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
  const year = String(20 + Math.floor(Math.random() * 10)).padStart(2, '0');
  return `${month}/${year}`;
};

export const getInitialCards = (): Card[] => [
  {
    id: 1,
    name: 'Mark Henry',
    cardNumber: generateCardNumber(),
    expirationDate: '12/20',
    isFrozen: false,
  },
  {
    id: 2,
    name: 'Jane Doe',
    cardNumber: generateCardNumber(),
    expirationDate: generateExpirationDate(),
    isFrozen: false,
  },
];

export const getTransactions = async (): Promise<Transaction[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return DEFAULT_TRANSACTIONS;
};
