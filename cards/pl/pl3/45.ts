import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-45",
	localId: 45,

	// Card informations
	name: {
		en: "Solrock",
		fr: "Solaroc",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 338,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/45/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/45/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/45/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/45/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},

	abilities: [{
		id: 1115,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Sunshine Fate",
			fr: "Destin ensoleillé",
		},
		text: {
			en: "Once during your turn (before your attack), if you have Lunatone in play, you may look at the top 3 cards of your deck and put them back on top of your deck in any order. This power can't be used if Solrock is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si vous avez un Seleroc en jeu, vous pouvez regarder les 3 cartes du dessus de votre deck et les replacer au-dessus de votre deck dans n'importe quel ordre. Ce pouvoir ne peut pas être utilisé si Solaroc est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Luna Turn",
			fr: "Tour lunaire",
		},
		text: {
			en: "If Lunatone is in your discard pile, this attack does 30 damage plus 30 more damage. Then, search your discard pile for Lunatone, show it to your opponent, and shuffle it into your deck.",
			fr: "Si Seleroc se trouve dans votre pile de défausse, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires. Ensuite, cherchez Seleroc dans votre pile de défausse, montrez-le à votre adversaire et mélangez-le à votre deck.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card

