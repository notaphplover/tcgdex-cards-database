import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-2",
	localId: 2,

	// Card informations
	name: {
		en: "Beautifly",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 267,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/2/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/2/high.png",
		},
	},

	evolveFrom: {
		en: "Silcoon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 780,
		type: AbilityType.POKEBODY,
		name: {
			en: "Hunch",
		},
		text: {
			en: "As long as Beautifly's remaining HP is 40 or less, Beautifly does 40 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Luring Antenna",
		},
		text: {
			en: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. If you do, this attack does 20 damage to the new Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cutting Wind",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card

