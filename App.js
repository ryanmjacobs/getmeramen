import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  click = () => {
    console.log(this.state.count);
    this.setState(ps => {
      ps.count++;
      return ps;
    });
  };

  render() {
      return (
	      <View styles={}
    );
  }
}

r

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    loginPage: {
	flex: 1,
	backgroundColor: 'red',
	alignItems: 'center',
    },
    splashPage: {
	flex: 1,
	backgroundColor: 'blue',
	alignItems: 'center'
    },
});
