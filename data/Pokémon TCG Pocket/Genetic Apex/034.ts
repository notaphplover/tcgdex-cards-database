import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Charmeleon"
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Stage1",
	evolveFrom: {
		en: "Charmander"
	},


	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Fire Claws"
		},

		damage: "60"
	}],

	retreat: 2,
	rarity: "Two Diamond"
}

export default card
