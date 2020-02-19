import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-61",
	localId: 61,

	// Card informations
	name: {
		en: "Rhydon",
		fr: "Rhinoféros",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 112,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/61/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/61/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/61/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/61/high.png",
		},
	},

	evolveFrom: {
		en: "Rhyhorn",
		fr: "Rhinocorne",
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
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Horn Drill",
			fr: "Empal'Korne",
		},
		damage: 50
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Mad Mountain",
			fr: "Montagne Enragée",
		},
		text: {
			en: "Flip 2 coins. If both are heads, discard the top card of your opponent's deck for each damage counter on this Pokémon.",
			fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, défaussez la carte du dessus du deck de votre adversaire pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card

