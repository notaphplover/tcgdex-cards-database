import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-141",
	localId: 141,

	// Card informations
	name: {
		en: "Heavy Boots",
		fr: "Bottes Lourdes",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/141/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/141/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/141/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/141/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Si le Coût de Retraite du Pokémon auquel cette carte est attachée est de 3 ou plus, ajoutez 20 PV au Pokémon et ce dernier ne peut pas être Confus. (Si le Pokémon est déjà Confus, retirez cet État Spécial.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card

