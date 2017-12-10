import languageReducer from  "./dropdown";
import changeLanguage from "../actions";
import {createStore} from "redux";
import allReducers from "../reducers";

const store = createStore(allReducers);

describe("dropdown", () => {
    it("changes to french", () => {
        expect(languageReducer({}, {type: "CHANGE_LANGUAGE", nextLanguage: "french"})).toEqual({language: "french", partOfSpeech: "pronouns"});
    });
    it("changes to french from french", () => {
        expect(languageReducer({language: "french", partOfSpeech: "pronouns"},{type: "CHANGE_LANGUAGE", nextLanguage: "french"})).toEqual({language: "french", partOfSpeech: "pronouns"});
    });
    it("changes to german from french", () => {
        expect(languageReducer({language: "french", partOfSpeech: "pronouns"}, {type: "CHANGE_LANGUAGE", nextLanguage: "german"})).toEqual({language: "german", partOfSpeech: "pronouns"});
    });
});

//describe("languageDetail", () => {
//    it("", () => {

//    });
//});
