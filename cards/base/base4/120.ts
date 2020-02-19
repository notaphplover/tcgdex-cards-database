import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base4-120",
	localId: 120,

	// Card informations
	name: {
		en: "Gust of Wind",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base4/120/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base4/120/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Base Set 2",
		code: "base4"
	}
}

export default card

