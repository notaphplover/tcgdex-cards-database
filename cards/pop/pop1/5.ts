import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop1-5",
	localId: 5,

	// Card informations
	name: {
		en: "Swampert",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 260,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop1/5/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop1/5/high.png",
		},
	},

	evolveFrom: {
		en: "Marshtomp",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 57,
		name: "Hiromichi Sugiyama"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Bubble",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Mud Splash",
		},
		text: {
			en: "If your opponent has any Benched Pokémon, choose 1 of them and flip a coin. If heads, this attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "POP Series 1",
		code: "pop1"
	}
}

export default card

