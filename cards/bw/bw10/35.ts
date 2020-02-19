import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-35",
	localId: 35,

	// Card informations
	name: {
		en: "Drifblim",
		fr: "Grodrive",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 426,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/35/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/35/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/35/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/35/high.png",
		},
	},

	evolveFrom: {
		en: "Drifloon",
		fr: "Baudrive",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},

	abilities: [{
		id: 912,
		type: AbilityType.TALENT,
		name: {
			en: "Drifting Balloon",
			fr: "Ballon Flottant",
		},
		text: {
			en: "This Pokémon's attacks cost Colorless less for each of your opponent's Team Plasma Pokémon in play.",
			fr: "Les attaques de ce Pokémon coûtent Colorless de moins pour chaque Pokémon de la Team Plasma de votre adversaire en jeu.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Derail",
			fr: "Déraillement",
		},
		text: {
			en: "Discard a Special Energy attached to the Defending Pokémon.",
			fr: "Défaussez une Énergie spéciale attachée au Pokémon Défenseur.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card

