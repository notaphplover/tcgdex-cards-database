import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-73",
	localId: 73,

	// Card informations
	name: {
		en: "Sneasel",
		fr: "Farfuret",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 215,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/73/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/73/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/73/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/73/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sneaky Smash",
			fr: "Fracas Sournois",
		},
		text: {
			en: "You can use this attack only if you go second, and only on your first turn. Discard an Energy from 1 of your opponent's Pokémon.",
			fr: "Vous ne pouvez utiliser cette attaque que si vous jouez en second et uniquement pendant votre premier tour. Défaussez une Énergie de l’un des Pokémon de votre adversaire.",
		},
	},{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Ambush",
			fr: "Embuscade",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 10
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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card

