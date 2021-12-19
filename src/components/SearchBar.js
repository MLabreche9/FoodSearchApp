import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
	return (
		<View style={styles.background}>
			<Feather name='search' style={styles.iconStyle} />
			<TextInput style={styles.inputStyle} placeholder='search' />
		</View>
	);
};

const styles = StyleSheet.create({
	background: {
		marginTop: 10,
		backgroundColor: '#F0eeee',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row'
	},
	inputStyle: {
		flex: 1,
		fontSize: 18
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: 'center',
		marginHorizontal: 15
	}
});

export default SearchBar;