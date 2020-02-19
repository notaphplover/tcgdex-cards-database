import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-99",
	localId: 99,

	// Card informations
	name: {
		en: "Flygon",
		fr: "Libégon",
	},

	hp: 140,

	type: [
		Type.DRAGON,
	],

	dexId: 330,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/99/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/99/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/99/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/99/high.png",
		},
	},

	evolveFrom: {
		en: "Vibrava",
		fr: "Vibraninf",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 111,
		name: "BERUBURI"
	},

	abilities: [{
		id: 265,
		type: AbilityType.TALENT,
		name: {
			en: "Sand Slammer",
			fr: "Prison de Sable",
		},
		text: {
			en: "At any time between turns, if this Pokémon is your Active Pokémon, put 1 damage counter on each of your opponent's Pokémon.",
			fr: "N'importe quand entre chaque tour, si ce Pokémon est votre Pokémon Actif, placez 1 marqueur de dégâts sur chacun des Pokémon de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flying Beatdown",
			fr: "Dérouillée Volante",
		},
		text: {
			en: "You may discard a Grass Energy and a Fighting Energy attached to this Pokémon. If you do, the Defending Pokémon is now Paralyzed.",
			fr: "Vous pouvez défausser une Énergie Grass et une Énergie Fighting attachées à ce Pokémon. Dans ce cas, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card

