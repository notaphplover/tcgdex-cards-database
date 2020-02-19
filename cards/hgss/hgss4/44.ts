import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-44",
	localId: 44,

	// Card informations
	name: {
		en: "Marowak",
		fr: "Ossatueur",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 105,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/44/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/44/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/44/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/44/high.png",
		},
	},

	evolveFrom: {
		en: "Cubone",
		fr: "Osselait",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bonemerang",
			fr: "Osmerang",
		},
		text: {
			en: "Flip 2 coins. This attack does 60 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 60
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Bone Impact",
			fr: "Impact osseux",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 20 damage plus 60 more damage. Discard that Stadium card.",
			fr: "Si une carte Stade est en jeu, cette attaque inflige 20 dégâts plus 60 dégâts supplémentaires. Défaussez cette carte Stade.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card

