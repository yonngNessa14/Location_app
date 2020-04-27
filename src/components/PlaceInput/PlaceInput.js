import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, Button } from 'react-native';

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = value => {
    this.setState({
      placeName: value
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.props.onPlaceAdded(this.state.placeName);
  };

  render () {
    return (
      <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="Enter your awesome name"
            value={this.state.placeName} 
            onChangeText={this.placeNameChangedHandler}
          />
          <Button title="Add" style={styles.placeButton} onPress={this.placeSubmitHandler} />
      </View>
    );
  }

}

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    placeInput: {
        width: "65%",
        marginLeft: "2%"
      },
      placeButton: {
        width: "25%",
        // marginRight: "10%"
      }
});

export default PlaceInput;