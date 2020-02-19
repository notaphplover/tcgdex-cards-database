import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-17",
	localId: 17,

	// Card informations
	name: {
		en: "Feraligatr",
		fr: "Aligatueur",
	},

	hp: 150,

	type: [
		Type.WATER,
	],

	dexId: 160,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/17/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/17/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/17/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/17/high.png",
		},
	},

	evolveFrom: {
		en: "Croconaw",
		fr: "Crocrodil",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Whirlpool",
			fr: "Hyper Tourbillon",
		},
		text: {
			en: "Flip a coin until you get tails. For each heads, discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Pour chaque côté face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 60
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Second Strike",
			fr: "Deuxième Coup",
		},
		text: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 80 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card

