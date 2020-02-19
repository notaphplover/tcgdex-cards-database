import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-5",
	localId: 5,

	// Card informations
	name: {
		en: "Flareon",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 136,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/5/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/5/high.png",
		},
	},

	evolveFrom: {
		en: "Eevee",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Fire Dance",
		},
		text: {
			en: "Search your discard pile for a Fire Energy card and attach it to 1 of your Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Multi Burn",
		},
		text: {
			en: "If Flareon has 3 or more different types of basic Energy cards attached to it, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Burned.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card

