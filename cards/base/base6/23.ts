import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base6-23",
	localId: 23,

	// Card informations
	name: {
		en: "Exeggutor",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 103,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base6/23/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base6/23/high.png",
		},
	},

	evolveFrom: {
		en: "Exeggcute",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Teleport",
		},
		text: {
			en: "Switch Exeggutor with 1 of your Benched Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Big Eggsplosion",
		},
		text: {
			en: "Flip a number of coins equal to the number of Energy attached to Exeggutor. This attack does 20 damage times the number of heads.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legendary Collection",
		code: "base6"
	}
}

export default card

