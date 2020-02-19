import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-193",
	localId: 193,

	// Card informations
	name: {
		en: "Guzma & Hala",
		fr: "Guzma et Pectorius",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/193/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/193/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/193/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/193/high.png",
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



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez une carte Stade dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.\n\nLorsque vous jouez cette carte, vous pouvez défausser 2 autres cartes de votre main. Dans ce cas, vous pouvez également chercher une carte Outil Pokémon et une carte Énergie spéciale de cette façon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

