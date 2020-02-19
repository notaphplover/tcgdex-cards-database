import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-115",
	localId: 115,

	// Card informations
	name: {
		en: "Slaking",
		fr: "Monaflèmit",
	},

	hp: 160,

	type: [
		Type.COLORLESS,
	],

	dexId: 289,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/115/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/115/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/115/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/115/high.png",
		},
	},

	evolveFrom: {
		en: "Vigoroth",
		fr: "Vigoroth",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 615,
		type: AbilityType.TALENT,
		name: {
			en: "Lazy",
			fr: "Fainéant",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, your opponent's Pokémon in play have no Abilities, except for Lazy.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, les Pokémon en jeu de votre adversaire n’ont pas de talent, à l’exception de Fainéant.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Critical Move",
			fr: "Mouvement Décisif",
		},
		text: {
			en: "Discard an Energy from this Pokémon. It can't attack during your next turn.",
			fr: "Défaussez une Énergie de ce Pokémon. Il ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 160
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card

