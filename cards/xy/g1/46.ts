import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-46",
	localId: 46,

	// Card informations
	name: {
		en: "Golem-EX",
		fr: "Grolem-EX",
	},

	hp: 180,

	type: [
		Type.FIGHTING,
	],

	dexId: 76,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/46/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/46/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/46/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/46/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Boulder Crush",
			fr: "Rocher Écrasant",
		},
		damage: 80
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Megaton Fall",
			fr: "Chute Mégatonne",
		},
		text: {
			en: "This Pokémon does 60 damage to itself.",
			fr: "Ce Pokémon s'inflige 60 dégâts.",
		},
		damage: 180
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card

