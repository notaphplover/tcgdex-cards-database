import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "si1-10",
	localId: 10,

	// Card informations
	name: {
		en: "Tentacruel",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 73,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/si1/10/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/si1/10/high.png",
		},
	},

	evolveFrom: {
		en: "Tentacool",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Tentacle Grip",
		},
		text: {
			en: "Flip a number of coins equal to the number of Water Energy cards attached to Tentacruel. For each heads, draw 2 cards.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Poison Sting",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Tentacle Grip",
		},
		text: {
			en: "Flip a number of coins equal to the number of Water Energy cards attached to Tentacruel. For each heads, draw 2 cards.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Poison Sting",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Southern Islands",
		code: "si1"
	}
}

export default card

