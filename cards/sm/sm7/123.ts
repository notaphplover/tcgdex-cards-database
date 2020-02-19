import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-123",
	localId: 123,

	// Card informations
	name: {
		en: "Acro Bike",
		fr: "Vélo Cross",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/123/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/123/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/123/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/123/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 2 cartes du dessus de votre deck et ajoutez l’une d’entre elles à votre main. Défaussez l’autre carte.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card

