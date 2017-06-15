//main state of the program
//information is mapped to the state dependent upon
//the events selected upon the dropdown list which is dependent upon
//the state of the button


//alternative reducer below
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
				card: {
					name: "Les nombres cardinaux: ",
					nums: ["Un", "Deux", "Trois"]
				},
				ord: {
					name: "Les nombres ordinaux: ",
					nums: []
				}
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
				card: {
					name: "Die Kardinalzahlen: ",
					nums: ["Un", "Deux", "Trois"]
				},
				ord: {
					name: "Die Ordinalzahlen: ",
					nums: ["Erst", "Zweite", "Dritte"]
				}
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
					name: "",
					nums: {
					nom: ["Один", "Два", "Три"],
					acc: [],
					dat: [],
					gen: [],
					loc: [],
					ins: []
					}

			},
				ord: {
					name: "",
					nums: {
					nom: [],
					acc: [],
					dat: [],
					gen: [],
					loc: [],
					ins: []
					}
	
				}
			}
		}
	]
}

//alternative reducer

// export default function() {
// 	return [
// 		{
// 			name: "French",
// 			partsOfSpeech: {
// 				pronouns: "Pronouns",
// 				numbers: "Numbers",
// 				verbs: "Verbs"
// 			}
// 		},
// 		{
// 			name: "German",
// 				partsOfSpeech: {
// 				pronouns: "Pronouns",
// 				numbers: "Numbers",
// 				verbs: "Verbs"
// 			}
// 		},
// 		{
// 			name: "Russian",
// 				partsOfSpeech: {
// 				pronouns: "Pronouns",
// 				numbers: "Numbers",
// 				verbs: "Verbs"
// 			}
// 		}
// 	]
// }