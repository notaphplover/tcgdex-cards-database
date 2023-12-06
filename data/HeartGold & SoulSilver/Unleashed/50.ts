import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Larvitar",
		fr: "Embrylex",
		de: "Larvitar"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		246,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mountain Eater",
				fr: "Mange-montagne",
				de: "Bergfresser"
			},
			effect: {
				en: "Discard the top card of your opponent’s deck. Then, remove 2 damage counters from Larvitar.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire. Ensuite, retirez 2 marqueurs de dégât à Embrylex.",
				de: "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel. Entferne dann 2 Schadensmarken von Larvitar."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Reckless Charge",
				fr: "Attaque imprudente",
				de: "Waghalsiger Sturmangriff"
			},
			effect: {
				en: "Larvitar does 10 damage to itself.",
				fr: "Embrylex s’inflige 10 dégâts.",
				de: "Larvitar fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "It feeds on soil. After it has eaten a large mountain, it will fall asleep so it can grow."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
