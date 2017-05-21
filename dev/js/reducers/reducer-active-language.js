export default function(state = null, action) {
	switch(action.type) {
		case 'LANGUAGE_SELECTED':
			return action.payload
			break;
	}
	return state;
}