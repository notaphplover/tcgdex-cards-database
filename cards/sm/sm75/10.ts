import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-10",
	localId: 10,

	// Card informations
	name: {
		en: "Heatmor",
		fr: "Aflamanoir",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 631,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/10/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/10/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/10/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/10/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Singe",
			fr: "Roussi",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Charring Breath",
			fr: "Souffle Incendiaire",
		},
		text: {
			en: "If your opponent's Active Pokémon isn't Burned, this attack does nothing.",
			fr: "Si le Pokémon Actif de votre adversaire n’est pas Brûlé, cette attaque ne fait rien.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card

