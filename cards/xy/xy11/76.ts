import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-76",
	localId: 76,

	// Card informations
	name: {
		en: "Marill",
		fr: "Marill",
	},

	hp: 60,

	type: [
		Type.FAIRY,
	],

	dexId: 183,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/76/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/76/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/76/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/76/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 132,
		name: "Shibuzoh."
	},



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Bubble Drain",
			fr: "Vide Bulle",
		},
		text: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts à ce Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card

