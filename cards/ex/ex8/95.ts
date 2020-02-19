import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-95",
	localId: 95,

	// Card informations
	name: {
		en: "Scramble Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/95/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/95/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 51,
		name: "Takumi Akabane"
	},











	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card

