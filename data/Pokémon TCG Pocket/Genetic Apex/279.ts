import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Wigglytuff ex"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],
	stage: "Stage1",
	evolveFrom: {
		en: "Jigglypuff"
	},
	suffix: "EX",
	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Sleepy Song"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep."
		},

		damage: "80"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "None"
}

export default card
