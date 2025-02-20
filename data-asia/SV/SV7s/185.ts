import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "โซโด"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		th: "สามารถยกของที่หนัก 5 ตันได้ ในตอนเช้าจะมุ่งหน้าไปยังถ้ำเป็นฝูงเพื่อหาหินแร่ที่เป็นอาหาร"
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "พุ่งเข้าชน"
		},

		damage: 30,
		cost: ["Metal", "Colorless"]
	}, {
		name: {
			th: "ตั้งใจสู้"
		},

		damage: 70,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card