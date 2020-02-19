import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-86",
	localId: 86,

	// Card informations
	name: {
		en: "Mary's Request",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/86/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/86/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card

