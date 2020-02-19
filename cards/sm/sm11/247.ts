import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-247",
	localId: 247,

	// Card informations
	name: {
		en: "Garchomp & Giratina-GX",
	},

	hp: 270,

	type: [
		Type.DRAGON,
	],

	dexId: 445,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/247/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/247/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],





	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Linear Attack",
		},
		text: {
			en: "This attack does 40 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Calamitous Slash",
		},
		text: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 80 more damage.",
		},
		damage: 160
	},{
		cost: [
			Type.FIGHTING,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "GG End GX",
		},
		text: {
			en: "Discard 1 of your opponent's Pokémon and all cards attached to it. If this Pokémon has at least 3 extra {F} Energy attached to it (in addition to this attack's cost), discard 2 of your opponent's Pokémon instead. (You can't use more than 1 GX attack in a game.)",
		},
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

