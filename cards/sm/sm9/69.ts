import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-69",
	localId: 69,

	// Card informations
	name: {
		en: "Cosmog",
		fr: "Cosmog",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 789,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/69/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/69/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/69/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/69/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},

	abilities: [{
		id: 105,
		type: AbilityType.TALENT,
		name: {
			en: "Cosmic Guard",
			fr: "Barrière Cosmique",
		},
		text: {
			en: "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent's).",
			fr: "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts infligés à ce Pokémon par des attaques (les vôtres et celles de votre adversaire).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mumble",
			fr: "Murmure",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card

