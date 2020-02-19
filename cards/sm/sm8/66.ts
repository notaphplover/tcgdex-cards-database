import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-66",
	localId: 66,

	// Card informations
	name: {
		en: "Brionne",
		fr: "Otarlette",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 729,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/66/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/66/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/66/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/66/high.png",
		},
	},

	evolveFrom: {
		en: "Popplio",
		fr: "Otaquin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Captivate",
			fr: "Séduction",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
			fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

