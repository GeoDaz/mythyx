import React from 'react';
import Zone from './ZoneUI';
import Card from '../lib/types/Card';
import Field from '../lib/types/Field';
import Zones from '../lib/constants/zones';

interface FieldUIProps {
	player: number;
	mirror?: boolean;
	field: Field;
	moveCard: (card: Card) => void;
}

const zoneIndexes = [0, 1, 2, 3, 4];

// TODO Zone n'est pas composant generique, faire un composant pour chaque zone.
// passer par le context

const FieldUI: React.FC<FieldUIProps> = ({ player, field, moveCard, mirror }) => {
	return (
		<div className={`grid grid-cols-7 gap-4 field player-${player}`}>
			return (
			<div className={`grid grid-rows-3 grid-cols-7 gap-4 field player-${player}`}>
				{/* Row 1 */}
				<div className="flex flex-row">
					{/* Terrain */}
					<Zone
						zoneName={Zones.magicField}
						cards={field.magicField}
						moveCard={moveCard}
					/>

					{/* Zones Monstres */}
					{zoneIndexes.map((zoneIndex: number) => (
						<Zone
							key={zoneIndex}
							zoneName={Zones.monsters}
							cards={field.monsters[zoneIndex]}
							moveCard={moveCard}
						/>
					))}

					{/* Néant */}
					<Zone zoneName={Zones.ban} cards={field.ban} moveCard={moveCard} />
				</div>

				{/* Row 2 */}
				<div className="flex flex-row">
					{/* Panthéon */}
					<Zone
						zoneName={Zones.pantheon}
						cards={field.pantheon}
						moveCard={moveCard}
					/>

					{/* Zone Magie */}
					{zoneIndexes.map((zoneIndex: number) => (
						<Zone
							key={zoneIndex}
							zoneName={Zones.magics}
							cards={field.magics[zoneIndex]}
							moveCard={moveCard}
						/>
					))}

					{/* Zones Cimetière */}
					<Zone
						zoneName={Zones.grave}
						cards={field.grave}
						moveCard={moveCard}
					/>
				</div>

				{/* Row 3 */}
				<div className="flex flex-row">
					{/* NULL */}
					<div className="zone"></div>
					{zoneIndexes.map(zoneIndex => (
						<div key={zoneIndex} className="zone"></div>
					))}
					{/* Deck */}
					<Zone zoneName={Zones.deck} cards={field.deck} moveCard={moveCard} />
				</div>
				{/* absolute */}
				<div className="flex flex-row hand">
					{/* Main */}
					<Zone zoneName={Zones.hand} cards={field.hand} moveCard={moveCard} />
				</div>
			</div>
			);
		</div>
	);
};

export default FieldUI;
