import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-69",
	localId: 69,

	// Card informations
	name: {
		en: "Relicanth",
		fr: "Relicanth",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 369,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/69/low.png",
			fr: "https://assets.tcgdex.net/fr/col/col1/69/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/69/high.png",
			fr: "https://assets.tcgdex.net/fr/col/col1/69/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 41,
		name: "Wataru Kawahara"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Prehistoric Wisdom",
			fr: "Sagesse préhistorique",
		},
		text: {
			en: "Choose a card from your hand and put it in the Lost Zone. Then, draw 3 cards.",
			fr: "Choisissez une carte de votre main et placez-la dans la Zone Perdue. Ensuite, piochez 3 cartes.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Granite Head",
			fr: "Tête de granit",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Relicanth by attacks is reduced by 30 (after applying Weakness and Resistance).",
			fr: "Pendant le tour suivant de votre adversaire, les dégâts infligés par des attaques à Relicanth sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card

