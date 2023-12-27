import React, { useState } from 'react';
import FieldUI from './FieldUI';
import Field, { emptyField } from '../lib/types/Field';

interface Card {
	name: string;
	// ... autres propriétés
}

interface GameUIProps {
	// ... autres propriétés
}

const GameUI: React.FC<GameUIProps> = ({}) => {
	const [player1Cards, setPlayer1Cards] = useState<Field>(emptyField);
	const [player2Cards, setPlayer2Cards] = useState<Field>(emptyField);

	const moveCard = (card: Card) => {
		// Logique pour déplacer la carte
	};

	return (
		<div className="flex justify-between">
			<FieldUI player={2} field={player2Cards} moveCard={moveCard} mirror />
			<FieldUI player={1} field={player1Cards} moveCard={moveCard} />
		</div>
	);
};

export default GameUI;
