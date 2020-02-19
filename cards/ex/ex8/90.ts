import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-90",
	localId: 90,

	// Card informations
	name: {
		en: "Professor Cozmo's Discovery",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/90/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/90/high.png",
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
		name: "Deoxys",
		code: "ex8"
	}
}

export default card

