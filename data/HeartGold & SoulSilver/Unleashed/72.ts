import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Dual Ball",
		fr: "Double boule",
		de: "Doppelball"
	},

	illustrator: "Takashi Yamaguchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez 2 pièces. Pour chaque côté face, cherchez un Pokémon de base dans votre deck, montrez-le à votre adversaire, puis ajoutez-le à votre main. Dans ce cas, mélangez ensuite votre deck.",
		en: "Flip 2 coins. For each heads, search your deck for a Basic Pokémon, show it to your opponent, and put it into your hand. If you do, shuffle your deck afterward.",
		de: "Wirf 2 Münzen. Durchsuche pro \"Kopf\" dein Deck nach einer Basis-Pokémon-Karte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck, falls du nach Karten gesucht hast."
	},

	trainerType: "Item",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
