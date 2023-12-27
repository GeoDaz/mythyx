import Actions from '../constants/actions';
import Archetypes from '../constants/archetypes';
import Attributes from '../constants/attributes';
import Elements from '../constants/elements';
import Sides from '../constants/sides';
import Zones from '../constants/zones';
import { CardTypes, EffectTypes, MonsterTypes } from '../constants/types';

interface Card {
	key: string;
	name: string;
	description?: string;
	atk: number;
	rank: number; // 1-3
	element: Elements;
	// element2?: Elements;
	attribute: Attributes;
	attribute2?: Attributes;
	archetype?: Archetypes;
	archetype2?: Archetypes;
	tribute?: Tribute;
}

export interface Tribute {
	number: number;
	attribute?: Attributes;
	element?: Elements;
	name?: string;
	zone?: Zones;
}

export interface Effect {
	tribute?: Tribute;
	action: Actions;
	function?: (target: Card, self: Card) => {};
	from: Zones;
	targeting?: boolean;
	target?: Target;
	response?: boolean;
	subType?: EffectTypes;
	value?: number;
}

// null|undefined value = all
export interface Target {
	type: CardTypes | EffectTypes | MonsterTypes | null;
	zone?: Zones;
	attribute?: Attributes;
	element?: Elements;
	rank?: number;
	archetype?: Archetypes;
	side?: Sides;
	number?: number;
}

export default Card;
