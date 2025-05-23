import React, { useState, useMemo } from 'react';
import { useCardContext } from '@/context/CardContext';

import AddCardModal from '@/components/AddCardModal/AddCardModal';
import CardActions from '@/components/CardActions/CardActions';
import CardDetails from '@/components/CardDetails/CardDetails';
import CardPreview from '@/components/CardPreview/CardPreview';
import EmblaCarousel from '@/components/EmblaCarousel/EmblaCarousel';
import RecentTransactions from '@/components/RecentTransactions/RecentTransactions';

import acountIcon from '@/assets/icons/account.svg';
import cardIcon from '@/assets/icons/card.svg';
import creditIcon from '@/assets/icons/credit.svg';
import homeIcon from '@/assets/icons/home.svg';
import logo from '@/assets/images/aspire-logo.svg';
import paymentsIcon from '@/assets/icons/payments.svg';

import css from './Home.module.css';

const Home: React.FC = () => {
  const { cards, toggleFreeze } = useCardContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const cardSlides = useMemo(
    () =>
      cards.map((card) => (
        <CardPreview key={`card-slide-item-${card.id}`} card={card} />
      )),
    [cards]
  );

  return (
    <div className={css.container}>
      {/* ----- SIDEBAR ----- */}
      <div className={css.sidebar}>
        <div className={css.logo}>
          <img src={logo} alt="Aspire Logo" />
          <p className={css.logoText}>
            Trusted way of banking for 3,000+ SMEs and startups in Singapore
          </p>
        </div>
        <nav className={css.nav}>
          <div className={css.navItem}>
            <img src={homeIcon} alt="Account Navigation" />
            <span className={css.navText}>Home </span>
          </div>
          <div className={`${css.navItem} ${css.active}`}>
            <img src={cardIcon} alt="Cards Navigation" />
            <span className={css.navText}>Cards </span>
          </div>
          <div className={css.navItem}>
            <img src={paymentsIcon} alt="Payments Navigation" />
            <span className={css.navText}>Payments </span>
          </div>
          <div className={css.navItem}>
            <img src={creditIcon} alt="Credit Navigation" />
            <span className={css.navText}>Credit </span>
          </div>
          <div className={css.navItem}>
            <img src={acountIcon} alt="Settings Navigation" />
            <span className={css.navText}>Settings </span>
          </div>
        </nav>
      </div>

      {/* ----- MAIN CONTENT ----- */}
      <div className={css.main}>
        <div className={css.header}>
          <div className={css.balance}>
            <span className={css.balanceLabel}>Available balance</span>
            <div className={css.balanceAmount}>
              <span className={css.currency}>S$</span>
              <span className={css.amount}>3,000</span>
            </div>
          </div>
          <button
            className={css.newCardButton}
            onClick={() => setIsModalOpen(true)}
          >
            <span className={css.addingIcon}>+</span>
            New card
          </button>
        </div>
        <div className={css.tabs}>
          <span className={`${css.tab} ${css.tabActive}`}>My debit cards</span>
          <span className={css.tab}>All company cards</span>
        </div>
        <div className={css.cardSection}>
          <div className={css.leftSection}>
            <div className={css.carouselContainer}>
              <EmblaCarousel
                slides={cardSlides}
                onSlideChange={setActiveCardIndex}
              />
            </div>
            <CardActions
              cards={cards}
              activeCardIndex={activeCardIndex}
              toggleFreeze={toggleFreeze}
            />
          </div>
          <div className={css.rightSection}>
            <CardDetails />
            <RecentTransactions />
          </div>
        </div>
      </div>
      <AddCardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Home;
