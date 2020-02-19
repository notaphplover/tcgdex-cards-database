import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-86",
	localId: 86,

	// Card informations
	name: {
		en: "Buneary",
		fr: "Laporeille",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 427,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/86/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/86/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/86/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/86/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rest",
			fr: "Repos",
		},
		text: {
			en: "Remove all Special Conditions and 4 damage counters from Buneary. Buneary is now Asleep.",
			fr: "Retirez à Laporeille tous ses États Spéciaux ainsi que 4 marqueurs de dégât. Laporeille est maintenant Endormi.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Kick",
			fr: "Double pied",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

