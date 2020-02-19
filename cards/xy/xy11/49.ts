import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-49",
	localId: 49,

	// Card informations
	name: {
		en: "Lampent",
		fr: "Mélancolux",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 608,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/49/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/49/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/49/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/49/high.png",
		},
	},

	evolveFrom: {
		en: "Litwick",
		fr: "Funécire",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 146,
		name: "miki kudo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mirror Mirror",
			fr: "Miroir",
		},
		text: {
			en: "Each player either draws or discards cards until that player has 4 cards in his or her hand. (Your opponent does this first.)",
			fr: "Chaque joueur pioche ou défausse des cartes jusqu’à avoir 4 cartes dans sa main. (Votre adversaire le fait en premier.)",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Flickering Flames",
			fr: "Flammes Vacillantes",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card

