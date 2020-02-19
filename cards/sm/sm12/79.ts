import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-79",
	localId: 79,

	// Card informations
	name: {
		en: "Xatu",
		fr: "Xatu",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 178,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/79/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/79/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/79/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/79/high.png",
		},
	},

	evolveFrom: {
		en: "Natu",
		fr: "Natu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 50,
		name: "Anesaki Dynamic"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Creepy Wind",
			fr: "Vent Perturbant",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Life Drain",
			fr: "Perte d’Énergie",
		},
		text: {
			en: "Flip a coin. If heads, put damage counters on your opponent's Active Pokémon until its remaining HP is 10.",
			fr: "Lancez une pièce. Si c’est face, placez des marqueurs de dégâts sur le Pokémon Actif de votre adversaire jusqu’à ce qu’il ait 10 PV.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

