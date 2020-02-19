import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-50",
	localId: 50,

	// Card informations
	name: {
		en: "Light Ninetales",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 38,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/50/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/50/high.png",
		},
	},

	evolveFrom: {
		en: "Vulpix",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 103,
		name: "Masako Yamashita"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Guiding Flame",
		},
		text: {
			en: "Put a Baby Pokémon or a Basic Pokémon card from your discard pile onto your Bench. (You can't use this attack if your Bench is full.)",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Fire Blast",
		},
		text: {
			en: "Discard a Energy card attached to Light Ninetales in order to use this attack.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card

