export enum Actions {
	destroy = 'destroy',
	revive = 'revive',
	ban = 'ban',
	unban = 'unban',
	summon = 'summon',
	toHand = 'toHand',
	toDeck = 'toDeck',
	toBan = 'toBan',
	function = 'function', // 'atk', 'rank', 'hp', 'element', 'attribute', 'name/archetype', 'effect/description'
	immuneAll = 'immuneAll',
	immuneMonster = 'immuneMonster',
	immuneTarget = 'immuneTarget',
	immuneMagic = 'immuneMagic',
	immuneAtk = 'immuneAtk',
}

export default Actions;
