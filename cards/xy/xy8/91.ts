import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-91",
	localId: 91,

	// Card informations
	name: {
		en: "Zoroark",
		fr: "Zoroark",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 571,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/91/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/91/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/91/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/91/high.png",
		},
	},

	evolveFrom: {
		en: "Zorua",
		fr: "Zorua",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},

	abilities: [{
		id: 658,
		type: AbilityType.TALENT,
		name: {
			en: "Stand In",
			fr: "Remplaçant",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may switch this Pokémon with your Active Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez échanger ce Pokémon avec votre Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mind Jack",
			fr: "Emprise Mentale",
		},
		text: {
			en: "This attack does 30 more damage for each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card

