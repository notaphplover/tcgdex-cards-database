import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Charmander"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Ember"
		},

		effect: {
			en: "Discard a R Energy from this Pokémon."
		},

		damage: "30"
	}],

	retreat: 1,
	rarity: "One Star"
}

export default card
