import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-50",
	localId: 50,

	// Card informations
	name: {
		en: "Houndoom G",
		fr: "Demolosse ",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 229,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/50/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/50/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/50/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/50/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.SP,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Black Cry",
			fr: "Cri noir",
		},
		text: {
			en: "The Defending Pokémon can't retreat or use any Poké-Powers during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite ou utiliser de Poké-Powers lors du prochain tour de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Slash",
			fr: "Entaille",
		},
		text: {
			en: "You may discard a Darkness Energy attached to Houndoom . If you do, this attack does 40 damage plus 20 more damage.",
			fr: "Vous pouvez défausser une Énergie Darkness attachée à Demolosse . Cette attaque inflige alors 40 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card

