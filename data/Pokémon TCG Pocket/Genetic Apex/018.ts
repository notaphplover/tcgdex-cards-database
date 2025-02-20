import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Bellsprout"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Vine Whip"
		},

		damage: "20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
