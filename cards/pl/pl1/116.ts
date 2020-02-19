import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-116",
	localId: 116,

	// Card informations
	name: {
		en: "Team Galactic's Invention G-101 Energy Gain",
		fr: "Gain d'Énergie Invention G-101 de Team Galaxie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/116/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/116/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/116/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/116/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 90,
		name: "Makoto Imai"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Attachez Invention G-101 Gain d'Énergie de Team Galaxie à 1 de vos Pokémon SP qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O, défaussez-la. Lorsque le Pokémon auquel cette carte est attachée n'est plus un Pokémon SP, défaussez-la.",
		},
	},{
		name: {},
		text: {
			fr: "Tant qu'Invention G-101 Gain d'Énergie de Team Galaxie est attachée à 1 Pokémon, le coût d'attaque des attaques de ce Pokémon est de Colorless de moins.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card

