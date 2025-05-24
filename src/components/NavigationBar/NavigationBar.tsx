import React from 'react';

import acountIcon from '@/assets/icons/account.svg';
import cardIcon from '@/assets/icons/card.svg';
import creditIcon from '@/assets/icons/credit.svg';
import homeIcon from '@/assets/icons/home.svg';
import paymentsIcon from '@/assets/icons/payments.svg';

import css from './NavigationBar.module.css';

interface NavigationBarProps {
  hasProfile?: boolean;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ hasProfile }) => {
  return (
    <nav className={css.nav}>
      <div className={css.navItem}>
        <img src={homeIcon} alt="Account Navigation" className={css.navImg} />
        <span className={css.navText}>Home</span>
      </div>
      <div className={`${css.navItem} ${css.active}`}>
        <img src={cardIcon} alt="Cards Navigation" className={css.navImg} />
        <span className={css.navText}>Cards</span>
      </div>
      <div className={css.navItem}>
        <img
          src={paymentsIcon}
          alt="Payments Navigation"
          className={css.navImg}
        />
        <span className={css.navText}>Payments</span>
      </div>
      <div className={css.navItem}>
        <img src={creditIcon} alt="Credit Navigation" className={css.navImg} />
        <span className={css.navText}>Credit</span>
      </div>
      <div className={css.navItem}>
        <img
          src={acountIcon}
          alt={hasProfile ? 'Profile Navigation' : 'Settings Navigation'}
          className={css.navImg}
        />
        <span className={css.navText}>
          {hasProfile ? 'Profile' : 'Settings'}
        </span>
      </div>
    </nav>
  );
};

export default NavigationBar;
