//action and action creator which signals to the reducer
//to reduce the state to a new state dependent upon the 
//eventCreators in the JSX
export const TOGGLE_DROPDOWN = "TOGGLE_DROPDOWN";
export const toggleDropdown = (nextLanguage) => {
	return {
		type: TOGGLE_DROPDOWN,
		nextLanguage
	}
}

//btnContainer creates the three buttons
//btn onClick shows the dropdownul
//dropdownul shows the li
//dropdownli onClick dependent upon id will generate the content of the displayinfo 
//displayinfo changes based on the other components and is not interactive

//

//Dropdownli props.item
//DropdownliContainer liReducer.map( item={} onClick={handleDetails} )
//Btn props.langName
//BtnContainer languageReducer.map ( langName={} onClick={handleDropdownMenu} )
//DisplayLanguageChosenDetails

//

//Concepts
//state //props //props as affected by Redux
//dumb functional components
//smart class components
//display components which can be made with either just a function or with a class

