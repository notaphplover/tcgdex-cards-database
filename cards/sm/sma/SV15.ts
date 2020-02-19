import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV15",
	localId: "SV15",

	// Card informations
	name: {
		en: "Seviper",
		fr: "Séviper",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 336,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV15/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV15/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV15/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV15/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 102,
		name: "SATOSHI NAKAI"
	},

	abilities: [{
		id: 1182,
		type: AbilityType.TALENT,
		name: {
			en: "More Poison",
			fr: "Poison Sans Fin",
		},
		text: {
			en: "Put 1 more damage counter on your opponent's Poisoned Pokémon between turns.",
			fr: "Placez 1 marqueur de dégâts supplémentaire sur le Pokémon Empoisonné de votre adversaire entre chaque tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Venomous Fang",
			fr: "Croc-Poison",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card

