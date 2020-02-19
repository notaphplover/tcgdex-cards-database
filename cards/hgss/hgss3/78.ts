import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-78",
	localId: 78,

	// Card informations
	name: {
		en: "Team Rocket's Trickery",
		fr: "Fourberie de la Team Rocket",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/78/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/78/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/78/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/78/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 53,
		name: "Takao Unno"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la près de votre Pokémon Actif. Une fois votre tour terminé, défaussez cette carte.",
		},
	},{
		name: {},
		text: {
			fr: "Piochez 2 cartes. Ensuite, votre adversaire défausse une carte de sa main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card

