import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-84",
	localId: 84,

	// Card informations
	name: {
		en: "Kingdra",
		fr: "Hyporoi",
	},

	hp: 140,

	type: [
		Type.DRAGON,
	],

	dexId: 230,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/84/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/84/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/84/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/84/high.png",
		},
	},

	evolveFrom: {
		en: "Seadra",
		fr: "Hypocéan",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dragon Vortex",
			fr: "Vortex Draconique",
		},
		text: {
			en: "Does 20 damage times the number of Water Energy cards and Lightning Energy cards in your discard pile. Then, shuffle all of those cards back into your deck.",
			fr: "Inflige 20 dégâts multipliés par le nombre de cartes Énergie Water et de cartes Énergie Lightning dans votre pile de défausse. Ensuite, mélangez toutes ces cartes avec votre deck.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Tri Bullet",
			fr: "Triple Décharge",
		},
		text: {
			en: "This attack does 30 damage to 3 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à 3 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card

