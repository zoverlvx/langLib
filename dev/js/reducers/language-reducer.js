//main state of the program
//information is mapped to the state dependent upon
//the events selected upon the dropdown list which is dependent upon
//the state of the button
export default function() {
	return [
		{
			name: "French",
			greeting: "Bonjour",
			pronouns: {
				name: "Les Pronoms",
				sub: ["je", "nous", "tu", "vous", "il, elle", "ils, elles"],
				dir: ["me", "nous", "te", "vous", "le, la", "les"],
				indir: ["me", "nous", "te", "vous", "lui", "leur"],
				cdoi: ["moi", "nous", "toi", "vous", "lui, elle", "eux, elles"]

			},
			numbers: {
				name: "Les nombres cardinaux et ordinaux",
				card: ["Un", "Deux", "Trois"],
				ord: []
			}
		},
		{
			name: "German",
			greeting: "Hallo",
			pronouns: {
				name: "Die Pronomen",
				nom: ["ich", "wir", "du", "ihr", "Sie", "Sie", "er, sie, es", "sie"],
				acc: ["mich", "uns", "dich", "euch", "Sie", "Sie", "ihn, sie, es", "sie"],
				dat: ["mir", "uns", "dir", "euch", "Ihnen", "Ihnen", "ihm, ihr, ihm", "ihnen"],
				gen: []

			},
			numbers: {
				name: "Die Kardinalzahlen und die Ordinalzahlen",
				card: ["Ein", "Zwei", "Drei"],
				ord: ["Erst", "Zweite", "Dritte"]
			}
		},
		{
			name: "Russian",
			greeting: "Привет",
			pronouns: {
				name: "",
				nom: [],
				acc: [],
				gen: [],
				dat: [],
				loc: [],
				ins: []
			},
			numbers: {
				card: {
					nom: ["Один", "Два", "Три"],
					acc: [],
					dat: [],
					gen: [],
					loc: [],
					ins: []
			},
				ord: {
					nom: [],
					acc: [],
					dat: [],
					gen: [],
					loc: [],
					ins: []
				}
			}
		}
	]
}