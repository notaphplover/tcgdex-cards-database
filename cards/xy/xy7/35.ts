import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-35",
	localId: 35,

	// Card informations
	name: {
		en: "Golurk",
		fr: "Golemastoc",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 623,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/35/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/35/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/35/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/35/high.png",
		},
	},

	evolveFrom: {
		en: "Golett",
		fr: "Gringolem",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},

	abilities: [{
		id: 771,
		type: AbilityType.TALENT,
		name: {
			en: "Double Type",
			fr: "Type Double",
		},
		text: {
			en: "As long as this Pokémon is in play, it is Psychic and Fighting type.",
			fr: "Tant que ce Pokémon est en jeu, il est de type Psychic et Fighting.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Superpower",
			fr: "Stop Θ",
		},
		text: {
			en: "You may do 40 more damage. If you do, this Pokémon does 20 damage to itself.",
		},
		damage: 80
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Surpuissance",
		},
		text: {
			fr: "Vous pouvez infliger 40 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 20 dégâts.",
		},
		damage: "80+"
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card

