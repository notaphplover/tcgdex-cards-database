import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Primeape δ",
		fr: "Colossinge δ ESPÈCES DELTA"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		57,
	],
	hp: 70,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Mankey",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Wreck",
				fr: "Anéantissement"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 30 damage plus 30 more damage. Discard that Stadium card.",
				fr: "Si une carte Stade est en jeu, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires. Défaussez cette carte Stade."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flames of Rage",
				fr: "Flammes de rage"
			},
			effect: {
				en: "Discard 2 Energy attached to Primeape. This attack does 10 damage plus 20 more damage for each damage counter on Primeape.",
				fr: "Défaussez 2 Énergies attachées à Colossinge. Cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires pour chaque marqueur de dégât sur Colossinge."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
