import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-28",
	localId: 28,

	// Card informations
	name: {
		en: "Flaaffy",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 180,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/28/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/28/high.png",
		},
	},

	evolveFrom: {
		en: "Mareep",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 73,
		name: "Toshinao Aoki"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Electric Punch",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Shock",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card

