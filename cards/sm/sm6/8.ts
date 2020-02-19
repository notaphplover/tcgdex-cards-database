import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-8",
	localId: 8,

	// Card informations
	name: {
		en: "Vivillon",
		fr: "Prismillon",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 666,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/8/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/8/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/8/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/8/high.png",
		},
	},

	evolveFrom: {
		en: "Spewpa",
		fr: "Pérégrain",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Vivid Powder",
			fr: "Poudre Vive",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Endormi.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card

