import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-62",
	localId: 62,

	// Card informations
	name: {
		en: "Rhyperior",
		fr: "Rhinastoc",
	},

	hp: 160,

	type: [
		Type.FIGHTING,
	],

	dexId: 464,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/62/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/62/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/62/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/62/high.png",
		},
	},

	evolveFrom: {
		en: "Rhydon",
		fr: "Rhinoféros",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Rock Blast",
			fr: "Boule Roc",
		},
		text: {
			en: "Flip a coin for each Fighting Energy attached to this Pokémon. This attack does 50 damage times the number of heads.",
			fr: "Lancez une pièce pour chaque Énergie Fighting attachée à ce Pokémon. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 50
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rock Wrecker",
			fr: "Roc-Boulet",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness or Resistance. This Pokémon can't attack during your next turn.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance. Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card

