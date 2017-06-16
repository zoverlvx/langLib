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
				cdoi: ["moi", "nous", "toi", "vous", "lui, elle", "eux, elles"],
				poss: {
					masc: ["Masculins:", "le mien", "le tien", "le sien", "le nôtre", "le vôtre", "le leur"],
					fem: ["Féminins:", "la mienne", "la tienne", "la sienne", "la nôtre", "la vôtre", "la leur"],
					mascpl: ["Pluriels et Masculins:", "les miens", "les tiens", "les siens", "les nôtres", "les vôtres", "les leurs"],
					fempl: ["Pluriels et Féminins:", "les miennes", "les tiennes", "les siennes", "les nôtres", "les vôtres", "les leurs"]
				}
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
				gen: {
						no_ending: ["mein", "dein", "sein, ihr, sein", "unser", "euer", "ihr"],
						e_ending: ["meine", "deine", "seine, ihre, seine", "unsere", "eure", "ihre"],
						es_ending: ["meines", "deines", "seines, ihres, seines", "unseres", "eures", "ihres"],
						er_ending: ["meiner", "deiner", "seiner, ihrer, seiner", "unserer", "eurer", "ihrer"],
						en_ending: ["meinen", "deinen", "seinen, ihren, seinen", "unseren", "euren", "ihren"],
						em_ending: ["meinem", "deinem", "seinem, ihrem, seinem", "unserem", "eurem", "ihrem"],
						neut_independent: ["meins", "deins", "seins, ihr(e)s, seins", "unseres", "eures", "ihr(e)s"],	
						
					}
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