import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-42",
	localId: 42,

	// Card informations
	name: {
		en: "Shinx",
		fr: "Lixy",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 403,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/42/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/42/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/42/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/42/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Jump On",
			fr: "Saut",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Static Shock",
			fr: "Choc Statique",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card

