import React from 'react';
import type { Transaction } from '@/types';

import downArrowIcon from '@/assets/icons/down-arrow.svg';
import icon from '@/assets/icons/card-details.svg';

import css from './CardDetails.module.css';

interface CardDetailsProps {
  transaction?: Transaction;
}

const CardDetails: React.FC<CardDetailsProps> = () => {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <div className={css.titleRow}>
          <img src={icon} alt="Card Details" className={css.icon} />
          <h3 className={css.title}>Card details</h3>
        </div>
        <img src={downArrowIcon} alt="Toggle Icon" />
      </div>
    </div>
  );
};

export default CardDetails;
