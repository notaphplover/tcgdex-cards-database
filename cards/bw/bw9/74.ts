import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-74",
	localId: 74,

	// Card informations
	name: {
		en: "Bisharp",
		fr: "Scalproie",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 625,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/74/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/74/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/74/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/74/high.png",
		},
	},

	evolveFrom: {
		en: "Pawniard",
		fr: "Scalpion",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cut Down",
			fr: "Retranchement",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
		},
		damage: 30
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slicing Blade",
			fr: "Lame Tranchante",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card

