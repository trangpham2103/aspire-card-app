export interface Card {
  id: number;
  name: string;
  cardNumber: string;
  expirationDate: string;
  isFrozen: boolean;
}

export interface Transaction {
  id: number;
  name: string;
  date: string;
  type: string;
  amount: string;
  category: string;
}

export interface CardContextType {
  cards: Card[];
  addNewCard: (name: string) => Promise<void>;
  toggleFreeze: (id: number) => void;
}
