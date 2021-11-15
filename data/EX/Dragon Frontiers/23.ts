import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Tropius δ",
		fr: "Tropius δ ESPÈCES DELTA"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		357,
	],
	hp: 70,
	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Tropical Heal",
				fr: "Guérison tropicale"
			},
			effect: {
				en: "Once during your turn, when you put Tropius from your hand onto your Bench, you may remove all Special Conditions, Imprison markers, and Shock-wave markers from your Pokémon.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Tropius de votre main sur votre Banc, vous pouvez retirer à votre Pokémon tous ses États Spéciaux et ses marqueurs Possessif et Électrochoc."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Grind",
				fr: "Écrase"
			},
			effect: {
				en: "Does 10 damage times the amount of Energy attached to Tropius.",
				fr: "Inflige 10 dégâts multipliés par le nombre d'Énergies attachées à Tropius"
			},
			damage: "10×",

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
