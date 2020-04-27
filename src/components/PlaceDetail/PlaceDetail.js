import React from 'react';
import { StyleSheet, Text, View, Modal, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';



const placeDetail = props => {
    let modalContent = null;
    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.image} />
                <Text style={styles.text}>{props.selectedPlace.name}</Text>
            </View>
        );
    }
    return (
        <Modal onRequestClose={props.closeModal} visible={props.selectedPlace !== null} animationType="slide">
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <TouchableOpacity>
                        <Icon size={30} name="ios-trash" color="red" />
                    </TouchableOpacity>
                    <Button title="Delete" color="red" onPress={props.deleteHandler} />
                    <Button title="Cancel" onPress={props.closeModal} />
                </View>
            </View>
        </Modal>
    );
    
};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        margin: 4
    },
    image: {
        width: "100%",
        height: 200
    }
});

export default placeDetail;