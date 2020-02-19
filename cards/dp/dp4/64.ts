import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-64",
	localId: 64,

	// Card informations
	name: {
		en: "Clamperl",
		fr: "Coquiperl",
	},

	hp: 40,

	type: [
		Type.WATER,
	],

	dexId: 366,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/64/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/64/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/64/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/64/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Clamp",
			fr: "Claquoir",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Sparkling Pearl",
			fr: "Perle étincelante",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card

