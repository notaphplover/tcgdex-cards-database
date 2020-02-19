import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-49",
	localId: 49,

	// Card informations
	name: {
		en: "Golem",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 76,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/49/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/49/high.png",
		},
	},

	evolveFrom: {
		en: "Graveler",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},

	abilities: [{
		id: 288,
		type: AbilityType.POKEBODY,
		name: {
			en: "Rock Body",
		},
		text: {
			en: "All Damage done by attacks to Golem is reduced by 10 (after applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rock Tumble",
		},
		text: {
			en: "Don't apply Resistance.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card

