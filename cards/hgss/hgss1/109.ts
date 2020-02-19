import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-109",
	localId: 109,

	// Card informations
	name: {
		en: "Meganium",
		fr: "Meganium",
	},

	hp: 150,

	type: [
		Type.GRASS,
	],

	dexId: 154,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/109/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/109/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/109/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/109/high.png",
		},
	},

	evolveFrom: {
		en: "Bayleef",
		fr: "Macronium",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 68,
		name: "Takashi Yamaguchi"
	},

	abilities: [{
		id: 1073,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Leaf Trans",
			fr: "Transfo feuille",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move a Grass Energy attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Meganium is affected by a Special Condition.",
			fr: "Autant de fois que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez déplacer une carte Énergie Grass attachée à l’un de vos Pokémon sur un autre Pokémon. Ce pouvoir ne peut pas être utilisé si Meganium est affecté par un État spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Solarbeam",
			fr: "Lance-soleil",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RarePrime,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card

