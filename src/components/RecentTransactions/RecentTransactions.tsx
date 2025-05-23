import React, { useState, useEffect } from 'react';
import type { Transaction } from '@/types';
import { getTransactions } from '@/api/mockApi';
import { TRANSACTION_TYPES } from '@/constants/transactionConstants';

import fileStorageIcon from '@/assets/icons/file-storage.svg';
import financeIcon from '@/assets/icons/business-and-finance.svg';
import flightsIcon from '@/assets/icons/flights.svg';
import megaphoneIcon from '@/assets/icons/megaphone.svg';
import recentTransactions from '@/assets/icons/recent-transactions.svg';
import upArrowIcon from '@/assets/icons/up-arrow.svg';

import css from './RecentTransactions.module.css';

interface RecentTransactionsProps {
  transactions?: Transaction[];
}

const RecentTransactions: React.FC<RecentTransactionsProps> = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setLoading(true);
        const data = await getTransactions();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) {
    return <div className={css.loading}>Loading transactions...</div>;
  }

  const { FILE_STORAGE, FLIGHTS, MEGAPHONE } = TRANSACTION_TYPES;

  const categoryMap = {
    [FILE_STORAGE]: { icon: fileStorageIcon, bg: '#009DFF1A' },
    [FLIGHTS]: { icon: flightsIcon, bg: '#00D6B51A' },
    [MEGAPHONE]: { icon: megaphoneIcon, bg: '#F251951A' },
  };

  return (
    <div className={css.container}>
      <div className={css.header}>
        <div className={css.titleRow}>
          <img
            src={recentTransactions}
            alt="Recent Transactions"
            className={css.transactionsIcon}
          />
          <h3 className={css.title}>Recent transactions</h3>
        </div>
        <img src={upArrowIcon} alt="Toggle Icon" />
      </div>
      <div className={css.transactionList}>
        {transactions.map((transaction) => {
          const { icon, bg } = categoryMap[transaction.category];
          return (
            <div className={css.transactionWrapper} key={transaction.id}>
              <div className={css.transaction}>
                <div
                  style={{ backgroundColor: bg }}
                  className={css.iconWrapper}
                >
                  <img src={icon} className={css.icon} />
                </div>
                <div className={css.details}>
                  <p className={css.name}>{transaction.name}</p>
                  <p className={css.date}>{transaction.date}</p>
                  <div className={css.typeWrapper}>
                    <div className={css.financeWrapper}>
                      <img src={financeIcon} alt="Finance Icon" />
                    </div>
                    <p className={css.type}>{transaction.type}</p>
                  </div>
                </div>
                <p
                  className={`${css.amount} ${
                    transaction.amount.startsWith('+')
                      ? css.positive
                      : css.negative
                  }`}
                >
                  {transaction.amount}
                </p>
              </div>
              <hr className={css.border} />
            </div>
          );
        })}
      </div>
      <div className={css.viewAll}>View all card transactions</div>
    </div>
  );
};

export default RecentTransactions;
