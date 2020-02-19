import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-109",
	localId: 109,

	// Card informations
	name: {
		en: "Lady",
		fr: "Mademoiselle",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/109/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/109/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/109/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/109/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 26,
		name: "Yusuke Ohmura"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez jusqu’à 4 cartes Énergie de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card

