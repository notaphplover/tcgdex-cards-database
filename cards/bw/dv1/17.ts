import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dv1-17",
	localId: 17,

	// Card informations
	name: {
		en: "Druddigon",
		fr: "Drakkarmin",
	},

	hp: 110,

	type: [
		Type.DRAGON,
	],

	dexId: 621,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/dv1/17/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/17/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/dv1/17/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/17/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tight Jaw",
			fr: "Mâchoire Serrée",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Tail",
			fr: "Draco-Queue",
		},
		text: {
			en: "Flip 2 coins. This attack does 80 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon Vault",
		code: "dv1"
	}
}

export default card

