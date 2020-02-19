import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-38",
	localId: 38,

	// Card informations
	name: {
		en: "Kangaskhan",
		fr: "Kangourex",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 115,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/38/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/38/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/38/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/38/high.png",
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
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Comet Punch",
			fr: "Poing comète",
		},
		text: {
			en: "Flip 4 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card

