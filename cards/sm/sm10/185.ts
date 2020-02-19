import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-185",
	localId: 185,

	// Card informations
	name: {
		en: "Samson Oak",
		fr: "Raphaël Chen",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/185/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/185/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/185/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/185/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Piochez 2 cartes. Si les deux Pokémon Actifs sont du même type, piochez 2 cartes supplémentaires.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

