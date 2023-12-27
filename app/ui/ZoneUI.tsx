
import React from 'react';
import CardUI from './CardUI';
import Zones from '../lib/constants/zones';
import Card from '../lib/types/Card';

interface ZoneUIProps {
  zoneName: Zones;
  cards: Card[];
  moveCard: (card: Card) => void;
}

const ZoneUI: React.FC<ZoneUIProps> = ({ zoneName, cards, moveCard }) => {
  return (
    <div className={`zone ${zoneName}`}>
      {cards &&
        cards.map((card, index) => (
          <CardUI key={index} card={card} moveCard={() => moveCard(card)} />
        ))}
    </div>
  );
};

export default ZoneUI;