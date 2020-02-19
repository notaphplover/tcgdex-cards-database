import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-99",
	localId: 99,

	// Card informations
	name: {
		en: "Salazzle",
		fr: "Malamandre",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 758,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/99/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/99/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/99/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/99/high.png",
		},
	},

	evolveFrom: {
		en: "Salandit",
		fr: "Tritox",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Smack",
			fr: "Claque",
		},
		damage: 40
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slashing Claw",
			fr: "Griffe Taillante",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

