//difficult to say what this is in relation to the current 
//architecture

export default function(state = null, action) {
	switch(action.type) {
		case 'LANGUAGE_SELECTED':
			return action.payload
			break;
	}
	return state;
}

//bindActionCreators is probably going to need
//to be involved