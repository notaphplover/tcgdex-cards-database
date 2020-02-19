import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-59",
	localId: 59,

	// Card informations
	name: {
		en: "Pupitar",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 247,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/59/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/59/high.png",
		},
	},

	evolveFrom: {
		en: "Larvitar",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pressurized Gas",
		},
		text: {
			en: "Does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rocket Tackle",
		},
		text: {
			en: "Pupitar does 10 damage to itself. Flip a coin. If heads, prevent all damage done to Pupitar by attacks during your opponent's next turn.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+20"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card

