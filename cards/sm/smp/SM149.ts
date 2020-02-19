import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM149",
	localId: "SM149",

	// Card informations
	name: {
		en: "Suicune",
		fr: "Suicune",
	},

	hp: 110,

	type: [
		Type.WATER,
	],

	dexId: 245,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM149/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM149/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM149/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM149/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 50,
		name: "Anesaki Dynamic"
	},

	abilities: [{
		id: 86,
		type: AbilityType.TALENT,
		name: {
			en: "Frozen Flow",
			fr: "Flot Gelé",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez demander à votre adversaire d’échanger son Pokémon Actif avec l’un de ses Pokémon de Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aurora Gain",
			fr: "Puissance Boréale",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card

