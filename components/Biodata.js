import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

class Biodata extends Component {
	render(){
		return (
				<Text style={styles.welcome}>{this.props.dinamis}</Text>
			)
	}
}
const styles ={
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    color: 'red',
    backgroundColor: '#ffffff',
  },
  }; 

export default Biodata;