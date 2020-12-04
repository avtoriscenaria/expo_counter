import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {buttonStyles} from "./styles";

//import { Button as ElementButton} from 'react-native-elements';

const styles = StyleSheet.create(buttonStyles);

export default function Button({label, onClick, style, textStyle}) {

    //return <ElementButton style={{...styles.button, ...style}} title={label}/>

    return (
            <TouchableHighlight
                onPress={onClick}
                underlayColor="white"
            >
                <View style={{...styles.button, ...style}}>
                    <Text style={textStyle}>{label}</Text>
                </View>
            </TouchableHighlight>
    );
}
