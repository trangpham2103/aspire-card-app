import type { Card } from '@/types';
import cancelCardIcon from '@/assets/icons/cancel-card.svg';
import freezeCardIcon from '@/assets/icons/freeze-card.svg';
import googlePayIcon from '@/assets/icons/google-pay.svg';
import replaceCardIcon from '@/assets/icons/replace-card.svg';
import spendLimitIcon from '@/assets/icons/spend-limit.svg';

import css from './CardActions.module.css';

interface CardActionsProps {
  cards: Card[];
  activeCardIndex: number;
  toggleFreeze: (cardId: number) => void;
}

const CardActions: React.FC<CardActionsProps> = (props) => {
  const { cards, activeCardIndex, toggleFreeze } = props;
  const cardActions = [
    {
      icon: freezeCardIcon,
      label: cards[activeCardIndex]?.isFrozen ? 'Unfreeze card' : 'Freeze card',
      onClick: toggleFreeze,
    },
    { icon: spendLimitIcon, label: 'Set spend limit' },
    { icon: googlePayIcon, label: 'Add to GPay' },
    { icon: replaceCardIcon, label: 'Replace card' },
    { icon: cancelCardIcon, label: 'Cancel card' },
  ];

  return (
    <div className={css.cardActions}>
      <div className={css.actionList}>
        {cardActions.map((action, index) => (
          <button
            key={`card-action-item-${index}`}
            className={css.actionItem}
            onClick={() => {
              if (action.onClick) {
                action.onClick(cards[activeCardIndex].id);
              }
            }}
          >
            <img src={action.icon} alt={action.label} />
            <span className={css.actionLabel}>{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CardActions;
