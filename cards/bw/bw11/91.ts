import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-91",
	localId: 91,

	// Card informations
	name: {
		en: "Cobalion",
	},

	hp: 120,

	type: [
		Type.METAL,
	],

	dexId: 638,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/91/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/91/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Energy Press",
		},
		text: {
			en: "Does 20 more damage for each Energy attached to the Defending Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Iron Breaker",
		},
		text: {
			en: "The Defending Pokémon can't attack during your opponent's next turn.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card

