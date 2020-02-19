import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-93",
	localId: 93,

	// Card informations
	name: {
		en: "Prism Energy",
		fr: "Énergie Prisme",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/93/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/93/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/93/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/93/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte fournit de l'Énergie Colorless. Si le Pokémon auquel cette carte est attachée est un Pokémon de base, cette carte fournit n'importe quel type d'Énergie mais ne fournit qu'une Énergie à la fois.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card

