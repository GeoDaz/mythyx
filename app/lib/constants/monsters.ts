import Card from '../types/Card';

const monsters = {
	mage: {
		key: 'mage',
		name: 'Mage',
		atk: 10,
		rank: 1,
		element: 'arcane',
		attribute: 'magician',
	},
	archmage: {
		key: 'archmage',
		name: 'ArchMage',
		atk: 20,
		rank: 2,
		element: 'arcane',
		attribute: 'magician',
		tribute: { number: 1 },
	},
	merlin: {
		key: 'merlin',
		name: 'Merlin',
		atk: 25,
		rank: 3,
		element: 'nature',
		effect: {
			action: 'immuneAll',
			passive: true,
			target: {
				attribute: 'warrior',
				zone: 'field',
				side: 'own',
			},
		},
		description:
			"All your warrior monsters are immune to all of your opponent's effects",
	},
	imitator: {
		key: 'imitator',
		name: 'Imitator',
		atk: 0,
		rank: 1,
		element: 'arcane',
		effect: {
			action: 'function',
			function: (target: Card, self: Card) => (self.atk = target.atk),
			target: {
				type: 'monster',
				zone: 'field',
				side: 'opponent',
			},
		},
		description: 'Copy the ATK of an opponent monster',
	},
};
export default monsters;
