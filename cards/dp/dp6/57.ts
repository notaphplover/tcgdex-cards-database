import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-57",
	localId: 57,

	// Card informations
	name: {
		en: "Houndoom",
		fr: "Demolosse",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 229,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/57/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/57/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/57/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/57/high.png",
		},
	},

	evolveFrom: {
		en: "Houndour",
		fr: "Hunduster",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 402,
		type: AbilityType.POKEBODY,
		name: {
			en: "Revenge Fang",
			fr: "Croc vengeur",
		},
		text: {
			en: "If you have less Benched Pokémon than your opponent, each of Houndoom's attacks does 40 more damage to the Active Pokémon (before applying Weakness and Resistance).",
			fr: "Si vous possédez moins de Pokémon de Banc que votre adversaire, chacune des attaques de Demolosse inflige 40 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Burning Sensation",
			fr: "Sensation brûlante",
		},
		text: {
			en: "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Burned.",
			fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, il est maintenant Brûlé.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Bright Flame",
			fr: "Flamme éclatante",
		},
		text: {
			en: "Flip a coin. If tails, discard 2 Fire Energy attached to Houndoom.",
			fr: "Lancez une pièce. Si c'est pile, défaussez 2 Énergies Fire attachées à Demolosse.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

