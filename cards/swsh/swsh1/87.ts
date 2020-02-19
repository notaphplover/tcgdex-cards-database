import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-87",
	localId: 87,

	// Card informations
	name: {
		en: "Munna",
		fr: "Munna",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/87/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/87/low.png",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 50,
		name: "Asako Ito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Moonlight",
			fr: "Rayon Lune",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Sphere",
			fr: "Sphère Psy",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
