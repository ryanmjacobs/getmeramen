import React from "react";
import { StyleSheet, Text, View, Image Button } from "react-native";

export default class App extends React.Component {
  this.state = {count: 0};

  click = () => {
      console.log(this.state.count);
      this.setState(ps => {
          ps.count++;
          return ps;
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: "http://getmeramen.com/ramen.jpg"}}/>

        <Text>get me ramen</Text>
        <Text style={{fontSize: 200}}>{this.state.count}</Text>

        <Button onPress={this.click} title="now"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
