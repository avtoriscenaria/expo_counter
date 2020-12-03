import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {buttonStyles} from "./styles";

const styles = StyleSheet.create(buttonStyles);

export default function Button({label, onClick, style, textStyle}) {
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
