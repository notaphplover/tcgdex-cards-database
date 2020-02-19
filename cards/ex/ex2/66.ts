import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-66",
	localId: 66,

	// Card informations
	name: {
		en: "Lotad",
	},

	hp: 40,

	type: [
		Type.WATER,
	],

	dexId: 270,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/66/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/66/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},

	abilities: [{
		id: 264,
		type: AbilityType.POKEBODY,
		name: {
			en: "Rain Dish",
		},
		text: {
			en: "At any time between turns, remove 1 damage counter from Lotad.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Ram",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card

