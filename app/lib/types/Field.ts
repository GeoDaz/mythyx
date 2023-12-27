import Zones from '../constants/zones';
import Card from './Card';

interface Field {
	[Zones.deck]: Card[];
	[Zones.pantheon]: Card[];
	[Zones.hand]: Card[];
	[Zones.monsters]: Card[];
	[Zones.magics]: Card[];
	[Zones.magicField]: Card|null;
	[Zones.grave]: Card[];
	[Zones.ban]: Card[];
}

export const emptyField: Field = {
	[Zones.deck]: [],
	[Zones.pantheon]: [],
	[Zones.hand]: [],
	[Zones.monsters]: [],
	[Zones.magics]: [],
	[Zones.magicField]: null,
	[Zones.grave]: [],
	[Zones.ban]: [],
};

export default Field;
