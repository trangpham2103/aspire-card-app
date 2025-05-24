import React, { useState, useMemo } from 'react';
import { useCardContext } from '@/context/CardContext';

import AddCardModal from '@/components/AddCardModal/AddCardModal';
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import CardActions from '@/components/CardActions/CardActions';
import CardDetails from '@/components/CardDetails/CardDetails';
import CardPreview from '@/components/CardPreview/CardPreview';
import EmblaCarousel from '@/components/EmblaCarousel/EmblaCarousel';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import RecentTransactions from '@/components/RecentTransactions/RecentTransactions';

import logo from '@/assets/images/aspire-logo.svg';
import logoMobile from '@/assets/images/aspire-logo-mobile.svg';

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
      <img src={logoMobile} alt="Aspire Logo" className={css.logoMobile} />

      {/* ----- SIDEBAR DESKTOP----- */}
      <div className={css.sidebarDesktop}>
        <div className={css.logo}>
          <img src={logo} alt="Aspire Logo" />
          <p className={css.logoText}>
            Trusted way of banking for 3,000+ SMEs and startups in Singapore
          </p>
        </div>
        <NavigationBar />
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
              className={css.cardActionsDesktop}
            />
          </div>
          <div className={css.rightSection}>
            <CardDetails />
            <RecentTransactions />
          </div>
        </div>
      </div>

      {/* ----- BOTTOM NAVIGATE MOBILE ----- */}
      <div className={css.sidebarMobile}>
        <NavigationBar hasProfile={true} />
        <BottomSheet>
          <div className={css.bottomSheet}>
            <CardActions
              cards={cards}
              activeCardIndex={activeCardIndex}
              toggleFreeze={toggleFreeze}
              className={css.cardActionsMobile}
            />
            <CardDetails />
            <RecentTransactions />
          </div>
        </BottomSheet>
      </div>

      <AddCardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Home;
