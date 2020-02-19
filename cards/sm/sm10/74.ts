import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-74",
	localId: 74,

	// Card informations
	name: {
		en: "Weezing",
		fr: "Smogogo",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 110,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/74/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/74/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/74/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/74/high.png",
		},
	},

	evolveFrom: {
		en: "Koffing",
		fr: "Smogo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 35,
		name: "OOYAMA"
	},

	abilities: [{
		id: 442,
		type: AbilityType.TALENT,
		name: {
			en: "Detention Gas",
			fr: "Gaz Captif",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, put 1 damage counter on each of your opponent's Basic Pokémon between turns.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, placez un marqueur de dégâts sur chacun des Pokémon de base de votre adversaire entre chaque tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Splattering Sludge",
			fr: "Boue Éclaboussante",
		},
		text: {
			en: "This attack does 20 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire ayant au moins un marqueur de dégâts. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

