import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-85",
	localId: 85,

	// Card informations
	name: {
		en: "Bastiodon",
		fr: "Bastiodon",
	},

	hp: 160,

	type: [
		Type.METAL,
	],

	dexId: 411,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/85/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/85/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/85/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/85/high.png",
		},
	},

	evolveFrom: {
		en: "Shieldon",
		fr: "Dinoclier",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 80,
		name: "Hasuno"
	},

	abilities: [{
		id: 857,
		type: AbilityType.TALENT,
		name: {
			en: "Earthen Shield",
			fr: "Bouclier de Terre",
		},
		text: {
			en: "Prevent all damage done to your Metal Pokémon by attacks from your opponent's Pokémon that have any Special Energy attached to them.",
			fr: "Évitez tous les dégâts d’attaque infligés à vos Pokémon Metal par les Pokémon de votre adversaire auxquels est attachée de l’Énergie spéciale.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Push Down",
			fr: "Recul",
		},
		text: {
			en: "You may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Vous pouvez demander à votre adversaire d’échanger son Pokémon Actif avec l’un de ses Pokémon de Banc.",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card

