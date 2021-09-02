import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
//---------------[HOME SCREEN ]----------------
const HomeScreen = () => {
	return (
		<View>
			<View>
				<Image
					style={styles.thumbnail}
					source={{
						uri: "https://images.unsplash.com/photo-1544210163-257effe9399e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
					}}
				/>
				<View style={styles.timeContainer}>
					<Text style={styles.time}>15:23</Text>
				</View>
			</View>
		</View>
	);
};

//----------[STYLES]----------------
const styles = StyleSheet.create({
	thumbnail: {
		width: "100%",
		height: 400,
		aspectRatio: 16 / 9,
	},

	timeContainer: {
		backgroundColor: "#00000099",
		height: 25,
		width: 50,
		justifyContent: "center",
		alignContent: "center",
		borderRadius: 4,
		position: "absolute",
		right: 5,
		bottom: 5,
	},

	time: {
		color: "#ffff",
		fontWeight: "bold",
		justifyContent: "center",
		alignItems: "center",
	},
});
export default HomeScreen;
