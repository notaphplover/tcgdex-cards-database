import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-105",
	localId: 105,

	// Card informations
	name: {
		en: "Lugia ex",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 249,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/105/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/105/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 74,
		name: "Hikaru Koike"
	},

	abilities: [{
		id: 1125,
		type: AbilityType.POKEBODY,
		name: {
			en: "Silver Sparkle",
		},
		text: {
			en: "If Lugia ex is your Active Pokémon and is damaged by an opponent's attack (even if Lugia ex is Knocked Out), flip a coin. If heads, choose an Energy card attached to the Attacking Pokémon and return it to your opponent's hand.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.WATER,
			Type.FIRE
		],
		name: {
			en: "Elemental Blast",
		},
		text: {
			en: "Discard a Fire Energy, Water Energy, and Lightning Energy attached to Lugia ex.",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card

