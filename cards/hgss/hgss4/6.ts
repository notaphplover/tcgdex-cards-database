import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-6",
	localId: 6,

	// Card informations
	name: {
		en: "Nidoking",
		fr: "Nidoking",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 34,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/6/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/6/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/6/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/6/high.png",
		},
	},

	evolveFrom: {
		en: "Nidorino",
		fr: "Nidorino",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 28,
		name: "match"
	},

	abilities: [{
		id: 1100,
		type: AbilityType.POKEBODY,
		name: {
			en: "Pheromone Stamina",
			fr: "Endurance aux phéromones",
		},
		text: {
			en: "Nidoking gets +20 HP for each Nidoqueen you have in play.",
			fr: "Nidoking reçoit +20 PV pour chacun de vos Nidoqueen en jeu.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Venomous Horn",
			fr: "Corne venimeuse",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card

