import React from 'react';
import Card from '../lib/types/Card';
import CardUI from './CardUI';

interface DeckUIProps {
	cards: Card[];
}

const DeckUI: React.FC<DeckUIProps> = ({ cards }) => {
	const lastCard = cards[cards.length - 1];
	const draw = () => {
		console.log('draw');
	};
	return (
		<div className="deck">
			<CardUI card={lastCard} thickness={cards.length} moveCard={draw} />
		</div>
	);
};

export default DeckUI;
