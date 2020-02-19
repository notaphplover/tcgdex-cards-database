import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-138",
	localId: 138,

	// Card informations
	name: {
		en: "Alolan Sandslash",
		fr: "Sablaireau d’Alola",
	},

	hp: 120,

	type: [
		Type.METAL,
	],

	dexId: 28,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/138/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/138/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/138/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/138/high.png",
		},
	},

	evolveFrom: {
		en: "Alolan Sandshrew",
		fr: "Sabelette d’Alola",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 80,
		name: "Hasuno"
	},



	attacks: [{
		name: {
			en: "Curve Strike",
			fr: "Courbe-Frappe",
		},
		text: {
			en: "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent's next turn.",
			fr: "Lancez une pièce. Si c’est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Reinforced Needle",
			fr: "Épine Renforcée",
		},
		text: {
			en: "If this Pokémon has a Pokémon Tool card attached to it, this attack does 60 more damage.",
			fr: "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

