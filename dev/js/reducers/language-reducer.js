//main state of the program
//information is mapped to the state dependent upon
//the events selected upon the dropdown list which is dependent upon
//the state of the button


//alternative reducer below
export default function() {
	return [
		{
			name: "French",
			greeting: "Bonjour, tous le monde!",
			pronouns: {
				name: "Les pronoms",
				sub: ["je", "nous", "tu", "vous", "il, elle", "ils, elles"],
				dir: ["me", "nous", "te", "vous", "le, la", "les"],
				indir: ["me", "nous", "te", "vous", "lui", "leur"],
				ton: ["moi", "nous", "toi", "vous", "lui, elle", "eux, elles"],
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
					nums: ["0 zéro", "1 un", "2 deux", "3 trois", "4 quatre", "5 cinque", "6 six", "7 sept", "8 huit", "9 neuf", "10 dix",
					"11 onze", "12 douze", "13 treize", "14 quatorze", "15 quinze", "16 seize", "17 dix-sept", "18 dix-huit", "19 dix-neuf", "20 vingt",
					"21 vingt et un", "22 vingt-deux", "23 vingt-trois", "etc", "30 trente", "31 trente et un", "32 trente-deux", "etc", "40 quarante",
					"50 cinquante", "60 soixante", "70 soixante-dix", "71 soixante et onze", "72 soixante-douze", "73 soixante-treize", "etc",
					"80 quatre-vingts", "81 quatre-vingt-un", "82 quatre-vingt-deux", "83 quatre-vingt-trois", "etc", "90 quatre-vingt-dix", "91 quatre-vingt-onze", 
					"92 quatre-vingt-douze", "etc", "100 cent", "101 cent-un", "etc", "110 cent-dix", "etc", "200 deux cents", "300 trois cents", "etc", 
					"1.000 mille", "2.000 deux mille", "100.000 cent mille", "200.000 deux cent mille", "1.000.000 un million", "10.000.000 dix millions", "1.000.000.000 un milliard",
					"10.000.000.000 dix milliards"
					]
				},
				ord: {
					name: "Les nombres ordinaux: ",
					nums: ["1er - premier / 1re - première", "2e - deuxième", "3e - troisième", "4e - quatrième", "5e - cinquième", "6e - sixième", "7e - septième", "8e - huitième", "9e - neuvième", "10e - dixième",
					"11e - onzième", "12e - douzième", "13e - treizième", "14e - quatorzième", "15e - quinzième", "16e - seizième", "17e - dix-septième", "etc", "20e - vingtième", "21er - vingt et premier / 21re - vingt et première",
					"22e - vingt-deuxième", "etc", "30e - trentième", "40e - quarantième", "50e - cinquantième", "60e - soixantième", "70e - soixante-dixième", "80e - quatre-vingtième", "90e - quatre-vingt-dixième",
					"100e - centième", "1.000e - millième", "1.000.000e - millionième"
					]
				}
			},
			verbs: {
				er_conjugation: {
					infinitive: "L\'infinitif:",
					present: ["je parle", "nous parlons", "tu parles", "vous parlez", "il, elle parle", "ils, elles parlent"],
					passe_compose: ["j'ai parlé", "nous avons parlé", "tu as parlé", "vous avez parlé", "il, elle a parlé", "ils, elles ont parlé"],
					imparfait: ["je parlais", "nous parlions", "tu parlais", "vous parliez", "il, elle parlait", "ils, elles parlaient"],
					futur_simple: ["je parlerai", "nous parlerons", "tu parleras", "vous parlerez", "il, elle parlera", "ils, elles parleront"],
					conditionnel_present: ["je parlerais", "nous parlerions", "tu parlerais", "vous parleriez", "il, elle parlerait", "ils, elles parleraient"],
					subjonctif_present: ["je parle", "nous parlions", "tu parles", "vous parliez", "il, elle parle", "ils, elles parlent"]
				},
				ir_conjugation: {
					infinitive: "L\'infinitif:",
					present: ["je finis", "nous finissons", "tu finis", "vous finissez", "il, elle finit", "ils, elles finissent"],
					passe_compose: ["j'ai fini", "nous avons fini", "tu as fini", "vous avez fini", "il, elle a fini", "ils, elles ont fini"],
					imparfait: ["je finissais", "nous finissions", "tu finissais", "vous finissiez", "il, elle finissait", "ils, elles finissaient"],
					futur_simple: ["je finirai", "nous finirons", "tu finiras", "vous finirez", "il, elle finira", "ils, elles finiront"],
					conditionnel_present: ["je finirais", "nous finirions", "tu finirais", "vous finiriez", "il, elle finirait", "ils, elles finiraient"],
					subjonctif_present: ["je finisse", "nous finissions", "tu finisses", "vous finissiez", "il, elle finisse", "ils, elles finissent"]
				},
				re_conjugation: {
					infinitive: "L\'infinitif:",
					present: ["je vends", "nous vendons", "tu vends", "vous vendez", "il, elle vend", "ils, elles vendent"],
					passe_compose: ["j'ai vendu", "nous avons vendu", "tu as vendu", "vous avez vendu", "il, elle a vendu", "ils, elles ont vendu"],
					imparfait: ["je vendais", "nous vendions", "tu vendais", "vous vendiez", "il, elle vendait", "ils, elles vendaient"],
					futur_simple: ["je vendrai", "nous vendrons", "tu vendras", "vous vendrez", "il, elle vendra", "ils, elles vendront"],
					conditionnel_present: ["je vendrais", "nous vendrions", "tu vendrais", "vous vendriez", "il, elle vendrait", "ils, elles vendraient"],
					subjonctif_present: ["je vendre", "nous vendrions", "tu vendres", "vous vendriez", "il, elle vendre", "ils, elles vendrent"]
				}
			}
		},
		{
			name: "German",
			greeting: "Hallo, alle die Welt!",
			pronouns: {
				name: "Die Pronomen",
				nom: ["ich", "wir", "du", "ihr", "Sie", "Sie", "er, sie, es", "sie"],
				acc: ["mich", "uns", "dich", "euch", "Sie", "Sie", "ihn, sie, es", "sie"],
				dat: ["mir", "uns", "dir", "euch", "Ihnen", "Ihnen", "ihm, ihr, ihm", "ihnen"],
				gen: {
						no_ending: ["mein", "dein", "sein", "ihr", "sein", "unser", "euer", "ihr", "Ihr"],
						e_ending:  ["meine", "deine", "seine", "ihre", "seine", "unsere", "eure", "ihre", "Ihre"],
						es_ending: ["meines", "deines", "seines", "ihres", "seines", "unseres", "eures", "ihres", "Ihres"],
						er_ending: ["meiner", "deiner", "seiner", "ihrer", "seiner", "unserer", "eurer", "ihrer", "Ihrer"],
						en_ending: ["meinen", "deinen", "seinen", "ihren", "seinen", "unseren", "euren", "ihren", "Ihren"],
						em_ending: ["meinem", "deinem", "seinem", "ihrem", "seinem", "unserem", "eurem", "ihrem", "Ihrem"],
						neut_independent: ["meins", "deins", "seines", "ihr(e)s", "seines", "unseres", "eures", "ihr(e)s", "Ihr(e)s"],	
						
					}
			},
			numbers: {
				card: {
					name: "Die Kardinalzahlen: ",
					nums: ["0 null", "1 eins", "2 zwei", "3 drei", "4 vier", "5 fünf", "6 sechs", "7 sieben", "8 acht", "9 neun", "10 zehn", 
					"11 elf", "12 zwölf", "13 dreizehn", "14 vierzehn", "15 fünfzehn", "16 sechzehn", "17 siebzehn", "18 achtzehn", "19 neunzehn", "20 zwanzig",
					"21 einundzwanzig", "22 zweiundzwanzig", "23 dreiundzwanzig", "usw.", "30 dreißig", "31 einunddreißig", "usw.", "40 vierzig", "50 fünfzig", 
					"60 sechzig", "70 siebzig", "80 achtzig", "90 neunzig", "100 hundert", "101 hundert eins", "102 hundert zwei", "usw.", "122 hundert zweiundzwanzig", 
					"usw.", "200 zweihundert", "usw.", "1.000 tausend", "2.000 zweitausend", "usw.", "10.000 zehntausend", "100.000 hunderttausend", "1.000.000 eine Million", "1.000.000.000 eine Milliard",
					"1.000.000.000.000 eine Billion"
					]
				},
				ord: {
					name: "Die Ordinalzahlen: ",
					nums: ["1te erst", "2te zweite", "3te dritte", "4te vierte", "5te fünfte", "6te sechste", "7te siebte", "8te achte", "9te neunte", "10te zehnte", 
					"11te elfte", "12te zwölfte", "13te dreizehnte", "14te vierzehnte", "15te fünfzehnte", "16te sechzehnte", "17te siebzehnte", "18te achtzehnte", "19te neunzehnte",
					"20ste zwanzigste", "21ste einundzwanzigste", "usw.", "30ste dreißigste", "usw.", "100ste hundertste"
					]
				}
			},
			verbs: {
				name: "Die Verben",
				infinitive: "machen",
				praesens: ["ich mache", "wir machen", "du machst", "ihr macht", "er, sie, es macht",  "sie machen", "Sie machen"],
				praesens_perfekt: ["ich habe gemacht", "wir haben gemacht", "du hast gemacht", "ihr habt gemacht", "er, sie, es hat gemacht", "sie haben gemacht", "Sie haben gemacht"],
				plusquamperfekt: ["ich hatte gemacht", "wir hatten gemacht", "du hattest gemacht", "ihr hattet gemacht", "er, sie, es hatte gemacht", "sie hatten gemacht", "Sie hatten gemacht"],
				futurII: ["ich werde gemacht haben", "wir werden gemacht haben", "du wirst gemacht haben", "ihr werdet gemacht haben", "er, sie, es wird gemacht haben",  "sie werden gemacht haben", "Sie werden gemacht haben"],
				praeteritum_and_konjunktivII_praesens: ["ich machte", "wir machten", "du machtest", "ihr machtet", "er, sie, es machte", "sie machten", "Sie machten"],
				futur: ["ich werde machen", "wir werden machen", "du wirst machen", "ihr werdet machen", "er, sie, es wird machen", "sie werden machen", "Sie werden machen"],
				konjunktivI_praesens: ["ich mache", "wir machen", "du machest", "ihr machet", "er, sie, es mache", "sie machen", "Sie machen"],
				konjunktivI_futur: ["ich werde machen", "wir werden machen", "du werdest machen", "ihr werdet machen", "er, sie, es werde machen", "sie werden machen", "Sie werden machen"],
				konjunktivII_futur: ["ich würde machen", "wir würden machen", "du würdest machen", "ihr würdet machen", "er, sie, es würde machen", "sie würden machen", "Sie würden machen"]
			}
		},
		{
			name: "Russian",
			greeting: "Привет, мир!",
			pronouns: {
				name: "Местоимения",
				nom: ["я", "мы", "ты", "вы", "он, она, оно", "они"],
				acc_and_gen: ["меня", "нас", "тебя", "вас", "его, её, его", "иx"],
				dat: ["мне", "нам", "тебе", "вам", "ему, ей, ему", "им"],
				loc: ["мне", "нас", "тебе", "вас", "нём, ней, нём", "ниx"],
				ins: ["мной", "нами", "тобой", "вами", "им, ей, им", "ими"]
			},
			numbers: {
				card: {
					name: "количественное числительное",
					nums: {
					nom: ["0 ноль", "1 один / одина / одино", "2 два / две", "3 три", "4 четыре", "5 пять", "6 шесть", "7 семь", "8 восемь", "9 девять", "10 десять",
					"11 одиннадцать", "12 двенадцать", "13 тринадцать", "14 четырнадцать", "15 пятнадцать", "16 шестнадцать", 
					"17 семнадцать", "18 восемнадцать", "19 девятнадцать", "20 двадцать", "21 двадцать один / одина / одино",
					"22 двадцать два / две", "23 двадцать три", "и т.д.", "30 тридцать", "40 сорок", "50 пятьдесят", "60 шестьдесят", 
					"70 семьдесят", "80 восемьдесят", "90 девяносто", "100 сто", "101 сто один / одина / одино", "и т.д.", "110 сто десять", "и т.д.",
					"200 двести", "300 триста", "400 четыреста", "500 пятьсот", "600 шестьсот", "700 семьсот", "и т.д.", "1.000 тысяча", "2.000 две тысячи",
					"3.000 три тысячи", "4.000 четыре тысячи", "5.000 пять тысяч", "6.000 шесть тысяч", "и т.д.", "1.000.000 миллион", 
					"2.000.000 два миллиона", "1.000.000.000 миллиард"
					],
					acc: [],
					dat: [],
					gen: [],
					loc: [],
					ins: []
					}

			},
				ord: {
					name: "порядковое числительное",
					nums: {
					nom: ["1-ый первый", "2-ой второй", "3-ий третий", "4-ый четвёртый", "5-ый пятый", "6-ой шестой", "7-ой седьмой", "8-ой восьмой", "9-ый девятый", "10-ый десятый", 
					"11-ый одиннадцатый", "12-ый двенадцатый", "13-ый тринадцатый", "14-ый четырнадцатый", "15-ый пятнадцатый", "16-ый шестнадцатый", "17-ый семнадцатый", "18-ый восемнадцатый", 
					"19-ый девятнадцатый", "20-ый двадцатый", "21-ый двадцать первый", "и т.д", "30-ый тридцатый", "40-ой сороковой", "50-ый пятидесятый", "60-ый шестидесятый",
					"70-ый семидесятый", "80-ый восьмидесятый", "90-ый девяностый", "100-ый сотый", "200-ый двухсотый", "201-ый двести первый", "300-ый трёхсотый", "400-ый четырёхсотый", 
					"500-ый пятисотый", "600-ый шестисотый", "700-ый семисотый", "800-ый восьмисотый", "900-ый девятисотый", "1.000-ый тысячный", "1.000.000-ый миллионный", "1.000.000.000-ый миллиардный"],
					acc: [],
					dat: [],
					gen: [],
					loc: [],
					ins: []
					}
	
				}
			},
			verbs: {
				imperfective: {
					first_conjugation: {
					infinitive: "читать",
					present: ["я читаю", "мы читаем", "ты читаешь", "вы читаете", "он, она, оно читает", "они читают"],
					past: ["я читал/а", "мы читали", "ты читал/а", "вы читали", "он читал, она читала, оно читало", "они читали"],
					future: ["я буду читать", "мы будем читать", "ты будешь читать", "вы будете читать", "он, она, оно будет читать", "они будут читать"],
					conditional: [],
					subjunctive: []
				},
				second_conjugation: {
					infinitive: ""
				}
				},
				perfective: {
					first_conjugation: {
						infinitive: "прочитать",
						past: [],
						future: []
					},
					second_conjugation: {
					infinitive: ""
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