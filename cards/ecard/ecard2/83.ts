import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-83",
	localId: 83,

	// Card informations
	name: {
		en: "Hoppip",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 187,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/83/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/83/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},

	abilities: [{
		id: 253,
		type: AbilityType.POKEBODY,
		name: {
			en: "Lightweight",
		},
		text: {
			en: "You pay Colorless less to retreat Hoppip for each Grass Energy attached to it.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Careless Tackle",
		},
		text: {
			en: "Hoppip does 10 damage to itself.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card

