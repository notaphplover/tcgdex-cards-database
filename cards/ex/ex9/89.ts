import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-89",
	localId: 89,

	// Card informations
	name: {
		en: "Multi Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/89/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/89/high.png",
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











	rarity: Rarity.Rare,

	category: Category.ENERGY,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card

