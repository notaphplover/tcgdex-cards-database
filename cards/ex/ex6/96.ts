import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-96",
	localId: 96,

	// Card informations
	name: {
		en: "PokéDex (HANDY909)",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/96/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/96/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 153,
		name: "K. Utsunomiya"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card

