import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-131",
	localId: 131,

	// Card informations
	name: {
		en: "Friend Ball",
		fr: "Copain Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/131/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/131/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/131/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/131/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 76,
		name: "Katsura Tabata"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez dans votre deck un Pokémon du même type que l’un des Pokémon en jeu de votre adversaire, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
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

