import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-41",
	localId: 41,

	// Card informations
	name: {
		en: "Hariyama",
		fr: "Hariyama",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 297,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/41/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/41/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/41/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/41/high.png",
		},
	},

	evolveFrom: {
		en: "Makuhita",
		fr: "Makuhita",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Palm Strike",
			fr: "Cou d'paume",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 40 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Spirited Throw",
			fr: "Lancer plein d'esprit",
		},
		text: {
			en: "If Hariyama has fewer remaining HP than the Defending Pokémon, this attack's base damage is 80.",
			fr: "Si Hariyama possède moins de PV que le Pokémon Défenseur, les dégâts de base de cette attaque sont de 80.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+30"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card

