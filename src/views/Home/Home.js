import React, { Component } from 'react';
import homeStyles from './styles';
import { StyleSheet, Text, View} from "react-native";
import {Button} from "../../components";

const styles = StyleSheet.create(homeStyles);

export default class Home extends Component {


    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Hi, I'm counter</Text>
                <Button label={'START'}
                        style={styles.start}
                        onClick={() => navigation.navigate('Counter')}
                />
            </View>
        )
    }
}
