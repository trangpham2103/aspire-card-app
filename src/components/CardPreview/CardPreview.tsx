import React, { useState } from 'react';
import type { Card } from '@/types';

import aspireLogo from '@/assets/images/aspire-logo.svg';
import eyeIcon from '@/assets/icons/remove-red-eye.svg';
import visaLogo from '@/assets/images/visa-logo.svg';

import css from './CardPreview.module.css';

interface CardPreviewProps {
  card: Card;
}

const CardPreview: React.FC<CardPreviewProps> = ({ card }) => {
  const [showCardNumber, setShowCardNumber] = useState(false);

  const formatCardNumber = (number: string) => {
    const cleanNumber = number.replace(/\D/g, '');
    const groups = cleanNumber.match(/.{1,4}/g);
    return groups ? groups.join(' ') : number;
  };

  const cardNumberGroups = showCardNumber
    ? formatCardNumber(card.cardNumber).split(' ')
    : [];

  const last4 = card.cardNumber.slice(-4);

  return (
    <div className={css.root}>
      <div className={css.cardHeader}>
        <button
          className={css.showNumberButton}
          onClick={() => setShowCardNumber(!showCardNumber)}
        >
          <img src={eyeIcon} alt="Button Card Number" className={css.eyeIcon} />
          {showCardNumber ? 'Hide card number' : 'Show card number'}
        </button>
      </div>
      <div className={`${css.card} ${card.isFrozen ? css.frozen : ''}`}>
        <img src={aspireLogo} alt="Aspire Logo" className={css.logo} />

        <h3 className={css.cardName}>{card.name}</h3>

        {showCardNumber ? (
          <div className={css.cardNumber}>
            {cardNumberGroups.map((group, index) => (
              <span key={index}>{group}</span>
            ))}
          </div>
        ) : (
          <div className={css.cardNumber}>
            <div className={css.dotGroup}>
              <span className={css.dot}></span>
              <span className={css.dot}></span>
              <span className={css.dot}></span>
              <span className={css.dot}></span>
            </div>
            <div className={css.dotGroup}>
              <span className={css.dot}></span>
              <span className={css.dot}></span>
              <span className={css.dot}></span>
              <span className={css.dot}></span>
            </div>
            <div className={css.dotGroup}>
              <span className={css.dot}></span>
              <span className={css.dot}></span>
              <span className={css.dot}></span>
              <span className={css.dot}></span>
            </div>
            <span>{last4}</span>
          </div>
        )}
        <div className={css.cardDetails}>
          <p>Thru: {card.expirationDate}</p>
          <div className={css.cvv}>
            <span className={css.cvvLabel}>CVV:</span>
            <span className={css.cvvValue}>***</span>
          </div>
        </div>
        <img src={visaLogo} alt="Visa Logo" className={css.visaLogo} />
      </div>
    </div>
  );
};

export default CardPreview;
