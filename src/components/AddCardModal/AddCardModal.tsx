import React, { useState, useEffect } from 'react';
import { useCardContext } from '@/context/CardContext';

import css from './AddCardModal.module.css';

interface AddCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddCardModal: React.FC<AddCardModalProps> = ({ isOpen, onClose }) => {
  const { addNewCard } = useCardContext();
  const [cardName, setCardName] = useState('');
  const [error, setError] = useState('');

  const validateCardName = (name: string) => {
    const cardNameRegex = /^[a-zA-Z0-9\s\-\.'"]+$/;
    if (!name) return 'Card name is required';
    if (!cardNameRegex.test(name)) return 'Card name can only contain letters, numbers, spaces, hyphens, dots, or single quotes';
    if (name.length > 50) return 'Card name must not exceed 50 characters';
    return null;
  };

  const isFormValid = cardName.trim() !== '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateCardName(cardName);

    if (validationError) {
      setError(validationError);
      return;
    }
    
    await addNewCard(cardName);
    setCardName('');
    setError('');
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      setCardName('');
      setError('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <button className={css.closeButton} onClick={onClose}>
          x
        </button>
        <h2 className={css.title}>Add New Card</h2>
        <form onSubmit={handleSubmit}>
          <div className={css.formGroup}>
            <label htmlFor="cardName" className={css.label}>
              Card Name
            </label>
            <input
              id="cardName"
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              className={css.input}
            />
            {error && <p className={css.error}>{error}</p>}
          </div>
          <div className={css.buttonGroup}>
            <button
              type="button"
              onClick={onClose}
              className={css.cancelButton}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={css.submitButton}
              disabled={!isFormValid}
            >
              Add Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCardModal;
