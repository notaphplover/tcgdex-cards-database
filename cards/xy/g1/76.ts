import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-76",
	localId: 76,

	// Card informations
	name: {
		en: "Basic Fire Energy",
		fr: "Énergie Fire de base",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/76/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/76/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/76/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/76/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASICENERGY,
		Tag.BASIC,
	],













	rarity: Rarity.Common,

	category: Category.ENERGY,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card

