import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Mantine",
		fr: "Demanta",
		de: "Mantax"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		226,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Group Swim",
				fr: "Nage de groupe",
				de: "Schwimmgruppe"
			},
			effect: {
				en: "Search your deck for a Water Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez un Pokémon Water dans votre deck, montrez-le à votre adversaire, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach 1 -Pokémon-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Aqua Slash",
				fr: "Aqua-tranche",
				de: "Aquaschlag"
			},
			effect: {
				en: "Mantine can’t attack during your next turn.",
				fr: "Demanta ne peut pas attaquer pendant votre prochain tour.",
				de: "Mantax kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "As it majestically swims, it doesn’t care if Remoraid attach to it for scavenging its leftovers."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
