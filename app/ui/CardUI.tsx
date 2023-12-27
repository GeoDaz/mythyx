import React from 'react';
import styles from '@/app/styles/card.module.css';
import Card from '../lib/types/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeClassName } from '../lib/functions';

interface CardUIProps {
	card: Card;
	recto?: boolean;
	vertical?: boolean;
	moveCard: () => void;
	thickness?: number;
}
const CardUI: React.FC<CardUIProps> = ({
	card,
	moveCard,
	recto = true,
	vertical = true,
	thickness = 1,
}) => {
	// TODO faire une popup pour afficher les infos de la carte sur le onClick quand la carte n'est pas activable et est face recto
	if (!card) return null;
	// TODO if recto = false
	return (
		<div
			className={makeClassName(
				styles.card,
				styles[card.element],
				!vertical && 'horizontal'
			)}
			onClick={moveCard}
		>
			<img
				src={`/images/cards/${card.key}.jpg`}
				alt={card.name}
				className={styles.cardImage}
			/>
			<div className={styles.cardInfo}>
				<img
					src={`/images/icons/${card.element}.png`}
					alt={card.element}
					className={styles.icon}
				/>
				{card.attribute && (
					<img
						src={`/images/icons/${card.attribute}.png`}
						alt={card.attribute}
						className={styles.icon}
					/>
				)}
				<span className={styles.atk}>
					{/* font awesome sword is paying */}
					{card.atk}
				</span>
			</div>
		</div>
	);
};
export default CardUI;
