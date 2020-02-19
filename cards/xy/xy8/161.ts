import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-161",
	localId: 161,

	// Card informations
	name: {
		en: "Brigette",
		fr: "Juliette",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/161/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/161/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/161/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/161/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez 1 Pokémon-EX de base ou 3 Pokémon de base dans votre deck (à part les Pokémon-EX) et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card

