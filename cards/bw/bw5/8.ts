import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-8",
	localId: 8,

	// Card informations
	name: {
		en: "Crustle",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 558,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/8/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/8/high.png",
		},
	},

	evolveFrom: {
		en: "Dwebble",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Cut",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Bullet",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card

