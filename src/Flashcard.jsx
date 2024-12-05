import { useState } from 'react';
import PropTypes from 'prop-types';
import './FlashCard.css';

const FlashCard = ({ card, onDelete }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flash-card" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">{card.question}</div>
        <div className="card-back">{card.answer}</div>
      </div>
      <button onClick={(e) => { 
          e.stopPropagation(); 
          onDelete(card.id); 
      }}>
        Delete
      </button>
    </div>
  );
};

FlashCard.propTypes = {
    card: PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
  };

export default FlashCard;