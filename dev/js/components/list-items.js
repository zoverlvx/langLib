import React from 'react';

const styles = {
	container: {
		fontSize: '12px'
	}
}

//dumb component which simply displays the name of a list item
//in the dropdown

//in css will take an id for to show this onClick from the LanguageBtn

const ListItems = (props) => {
	console.log("Here is children", props.children)
	return (
		<li style={styles.container} key={props.id} onClick={props.handleClick}>{props.items}</li>
		);
}

export default ListItems;