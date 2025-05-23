import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Card, CardContextType } from '@/types';
import {
  getInitialCards,
  generateCardNumber,
  generateExpirationDate,
} from '@/api/mockApi';

const CardContext = createContext<CardContextType | undefined>(undefined);

export const CardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    setCards(getInitialCards());
  }, []);

  const addNewCard = async (name: string) => {
    const newCard: Card = {
      id: Date.now(),
      name,
      cardNumber: generateCardNumber(),
      expirationDate: generateExpirationDate(),
      isFrozen: false,
    };
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const toggleFreeze = (id: number) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isFrozen: !card.isFrozen } : card
      )
    );
  };

  return (
    <CardContext.Provider value={{ cards, addNewCard, toggleFreeze }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('useCardContext must be used within a CardProvider');
  }
  return context;
};
