import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-114",
	localId: 114,

	// Card informations
	name: {
		en: "Speed Stadium",
		fr: "Stade Rapide",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/114/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/114/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/114/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/114/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		},
	},{
		name: {},
		text: {
			fr: "Une seule fois lors du tour de chaque joueur, le joueur peut lancer une pièce jusqu'à ce qu'il ou elle obtienne pile. Pour chaque face, ce joueur pioche une carte.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card

