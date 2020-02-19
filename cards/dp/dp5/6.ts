import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-6",
	localId: 6,

	// Card informations
	name: {
		en: "Kabutops",
		fr: "Kabutops",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 141,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/6/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/6/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/6/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/6/high.png",
		},
	},

	evolveFrom: {
		en: "Kabuto",
		fr: "Kabuto",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 445,
		type: AbilityType.POKEBODY,
		name: {
			en: "Primal Shell",
			fr: "Carapace primitive",
		},
		text: {
			en: "As long as Kabutops is your Active Pokémon, your opponent can't play any Trainer cards from his or her hand.",
			fr: "Tant que Kabutops est votre Pokémon Actif, votre adversaire ne peut pas jouer de cartes Dresseur de sa main.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Chop Up",
			fr: "Découper",
		},
		text: {
			en: "Does 10 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire possédant des marqueurs de dégât. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+30"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card

