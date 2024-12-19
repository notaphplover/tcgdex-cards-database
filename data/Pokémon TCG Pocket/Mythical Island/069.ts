import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Exeggutor"
	},

	illustrator: "Gapao",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		en: "Exeggcute"
	},

	description: {
		en: "Each of Exeggutor's three heads is thinking<br />different thoughts. The three don't seem to be<br />very interested in one another."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Psychic"
		},

		damage: 80,
		cost: ["Grass", "Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	rarity: "One Star"
}

export default card