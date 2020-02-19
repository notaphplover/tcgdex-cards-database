import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-27",
	localId: 27,

	// Card informations
	name: {
		en: "Ursaring",
		fr: "Ursaring",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 217,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/27/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/27/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/27/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/27/high.png",
		},
	},

	evolveFrom: {
		en: "Teddiursa",
		fr: "Teddiursa",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Confront",
			fr: "Confrontation",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cross Chop",
			fr: "Coup-croix",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 50 damage plus 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card

