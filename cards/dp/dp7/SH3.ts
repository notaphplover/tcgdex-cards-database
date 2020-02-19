import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-SH3",
	localId: "SH3",

	// Card informations
	name: {
		en: "Voltorb",
		fr: "Voltorb (different color)",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 100,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/SH3/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/SH3/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/SH3/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/SH3/high.png",
		},
	},

	evolveFrom: {
		fr: "Voltorbe",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fastball",
			fr: "Balle rapide",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon.  Flip a coin.  If heads, this attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Lancez une pièce. Si c'est face, cette attaque lui inflige 20 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Charge Beam",
			fr: "Rayon chargé",
		},
		text: {
			en: "Search your discard pile for a lightning Energy card and attach it to Voltorb.",
			fr: "Choisissez dans votre pile de défausse une carte Énergie Lightning et attachez-la à Voltorbe.",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Thundershock",
			fr: "Éclair",
		},
		text: {
			en: "Flip a coin.  If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

