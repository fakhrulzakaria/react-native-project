import React, { Component } from 'react';
import {  StyleSheet,  Text,  View,  Image, TextInput, TouchableOpacity, Alert} from 'react-native';

export default class Calculator extends Component {
	state = {
		number: 0
	}

	btnPressAC = () => {
		this.setState({
			number: this.state.number = 0
		})
	}

	btnPress1 = () => {
		this.setState({
			number: this.state.number + 1
		})
	}

	btnPress2 = () => {
		this.setState({
			number: this.state.number + 2
		})
	}

	btnPress3 = () => {
		this.setState({
			number: this.state.number + 3
		})
	}

	btnPress4 = () => {
		this.setState({
			number: this.state.number + 4
		})
	}

	btnPress5 = () => {
		this.setState({
			number: this.state.number + 5
		})
	}

	btnPress6 = () => {
		this.setState({
			number: this.state.number + 6
		})
	}

	btnPress7 = () => {
		this.setState({
			number: this.state.number + 7
		})
	}

	btnPress8 = () => {
		this.setState({
			number: this.state.number + 8
		})
	}

	btnPress9 = () => {
		this.setState({
			number: this.state.number + 9
		})
	}
  render() {
    return (
    	<View style={styles.container}>
    		<View style={styles.box1}>
    			<Text style={styles.output}>{this.state.number}</Text>
    		</View>
    		<View style={styles.box2}>
    			<View style={styles.rowContainer}>
					<TouchableOpacity style={styles.btn} onPress={this.btnPressAC}>
						<Text style={styles.btnTextBlue}>AC</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn} onPress={this.btnPress7}>
						<Text style={styles.btnText}>7</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn} onPress={this.btnPress4}>
						<Text style={styles.btnText}>4</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn} onPress={this.btnPress1}>
						<Text style={styles.btnText}>1</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn}>
						<Text style={styles.btnText}>%</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.rowContainer}>
					<TouchableOpacity style={styles.btn}>
						<Text style={styles.btnText}>C</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn} onPress={this.btnPress8}>
						<Text style={styles.btnText}>8</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn} onPress={this.btnPress5}>
						<Text style={styles.btnText}>5</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn} onPress={this.btnPress2}>
						<Text style={styles.btnText}>2</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn}>
						<Text style={styles.btnText}>0</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.rowContainer}>
					<TouchableOpacity style={styles.btn}>
						<Text style={styles.btnText}>/</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn} onPress={this.btnPress9}>
						<Text style={styles.btnText}>9</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn} onPress={this.btnPress6}>
						<Text style={styles.btnText}>6</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn} onPress={this.btnPress3}>
						<Text style={styles.btnText}>3</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn}>
						<Text style={styles.btnText}>.</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.rowContainer}>
					<TouchableOpacity style={styles.btn}>
						<Text style={styles.btnText}>x</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn}>
						<Text style={styles.btnText}>-</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn}>
						<Text style={styles.btnText}>+</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn2}>
						<Text style={styles.btnText2}>=</Text>
					</TouchableOpacity>
				</View>
    		</View>
    	</View>    	
    );
  }
}

const styles = StyleSheet.create({
  	container: {
	    flex: 1
	},

	box1: {
		flex: 2,
		backgroundColor: '#F1F3F3',
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	},

	output: {
		fontSize: 64,
		color: '#000'
	},

	box2: {
		flex: 3,
		backgroundColor: '#fff',
		flexDirection: 'row'
	},

	rowContainer: {
		flex: 1
	},

	btn: {
		flex: 1,
		justifyContent: 'center'
		
	},

	btn2: {
		flex: 2,
		backgroundColor: '#30B4FB',
		justifyContent: 'center'
	},

	btnText: {
		fontSize: 32,
		color: '#6F7480',
		textAlign: 'center',
	},

	btnText2: {
		fontSize: 32,
		color: '#fff',
		textAlign: 'center',
	},

	btnTextBlue: {
		fontSize: 32,
		color: '#30B4FB',
		textAlign: 'center',
	}
})