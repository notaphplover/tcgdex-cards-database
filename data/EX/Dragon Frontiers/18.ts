import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Ledian δ",
		fr: "Coxyclaque δ ESPÈCES DELTA"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		166,
	],
	hp: 70,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Ledyba",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Prowl",
				fr: "Rôder"
			},
			effect: {
				en: "Once during your turn, when you play Ledian from your hand to evolve 1 of your Pokémon, you may search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Coxyclaque de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez choisir dans votre deck n'importe quelle carte. Placez-la dans votre main. Ensuite, mélangez votre deck."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Star",
				fr: "Étoile métallique"
			},
			effect: {
				en: "If Ledian has a Pokémon Tool card attached to it, draw 3 cards.",
				fr: "Si Coxyclaque possède une carte Outil Pokémon, piochez 3 cartes."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
