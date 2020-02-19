import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-71",
	localId: 71,

	// Card informations
	name: {
		en: "Onix",
		fr: "Onix",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 95,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/71/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/71/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/71/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/71/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Screech",
			fr: "Grincement",
		},
		text: {
			en: "During your next turn, the Defending Pokémon takes 20 more damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, le Pokémon Défenseur subit 20 dégâts supplémentaires provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Rage",
			fr: "Frénésie",
		},
		text: {
			en: "This attack does 10 more damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card

