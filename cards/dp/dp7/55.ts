import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-55",
	localId: 55,

	// Card informations
	name: {
		en: "Bronzor",
		fr: "Bronzor",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 436,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/55/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/55/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/55/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/55/high.png",
		},
	},

	evolveFrom: {
		fr: "Archéomire",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Gyro Swap",
			fr: "Gyro-échange",
		},
		text: {
			en: "Put a number of damage counters on the Defending Pokémon equal to the number of Colorless Energy in Bronzor's Retreat Cost (after applying effects to the Retreat Cost).",
			fr: "Placez autant de marqueurs de dégât sur le Pokémon Défenseur qu'il y a d'Énergies Colorless dans le Coût de Retraite d'Archéomire (après avoir appliqué les effets sur le Coût de Retraite).",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psyshock",
			fr: "Choc psy",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],

	resistances: [{
		type: Type.FIRE,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

