import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Kingler"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Krabby"
	},


	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "KO Crab"
		},

		effect: {
			en: "Flip 2 coins. If both of them are heads, this attack does 80 more damage"
		},

		damage: "80+"
	}],

	retreat: 3,
	rarity: "Two Diamond"
}

export default card
