import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-10",
	localId: 10,

	// Card informations
	name: {
		en: "Moltres",
		fr: "Sulfura",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 146,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/10/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/10/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/10/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/10/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 451,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Flame Charge",
			fr: "Recharge enflammée",
		},
		text: {
			en: "Once during your turn, when you put Moltres from your hand onto your Bench, you may flip a coin. If heads, search your discard pile for up to 3 Fire Energy cards and attach them to Moltres.",
			fr: "Une seule fois lors de votre tour, lorsque vous placez Sulfura de votre main sur votre Banc, vous pouvez lancer une pièce. Si c'est face, choisissez dans votre pile de défausse jusqu'à 3 cartes Énergie Fire et attachez-les à Sulfura.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Scorching Wing",
			fr: "Aile brûlante",
		},
		text: {
			en: "Discard all Fire Energy attached to Moltres.",
			fr: "Défaussez toutes les Énergies Fire attachées à Sulfura.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card

