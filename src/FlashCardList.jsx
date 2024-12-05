import { useState } from 'react';
import FlashCard from './Flashcard';

const FlashCardList = () => {
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState({ question: '', answer: '' });

  const addCard = () => {
    if (newCard.question && newCard.answer) {
      setCards([...cards, { ...newCard, id: Date.now() }]);
      setNewCard({ question: '', answer: '' });
    }
  };

  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div>
      <div className="input-form">
        <input
          type="text"
          placeholder="Question"
          value={newCard.question}
          onChange={(e) => setNewCard({ ...newCard, question: e.target.value })}
        />
        <input
          type="text"
          placeholder="Answer"
          value={newCard.answer}
          onChange={(e) => setNewCard({ ...newCard, answer: e.target.value })}
        />
        <button onClick={addCard}>Add Card</button>
      </div>

      <div className="card-list">
        {cards.map((card) => (
          <FlashCard key={card.id} card={card} onDelete={deleteCard} />
        ))}
      </div>
    </div>
  );
};

export default FlashCardList;