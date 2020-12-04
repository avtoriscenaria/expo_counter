import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from "../../components";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { changeCount } from '../../redux/actions';

import {counterStyles} from "./styles";

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ru from '../../constants/words/ru.json';

const styles = StyleSheet.create(counterStyles);

class Counter extends Component {

    state = {
        count: 0,
        redux: false,
    }

    componentDidMount() {
        this.initialize()
    }

    initialize = async () => {
        const redux = await AsyncStorage.getItem('isRedux')
        const countState = await AsyncStorage.getItem('counterState')

        if (redux !== null) {
            this.setState({redux: !!(+redux)})
        }
        if (countState !== null) {
            this.setState({count: +countState})
        }
    }

    onChangeCounter = async (v) => {
        const {redux} = this.state;
        const { changeCount } = this.props;

        redux ? changeCount(v) :
        this.setState({count: v});

      setTimeout(async () => {
          if (!redux && this.state.count === v) {
              await AsyncStorage.setItem('counterState', `${v}`)
          }
      }, 500)
    };

    refresh = async () => {
        const {changeCount} = this.props;
        const {redux} = this.state;

        if (redux) {
            changeCount(0);
            //await AsyncStorage.removeItem('counterRedux')
        } else {
            this.setState({count: 0})
            await AsyncStorage.removeItem('counterState')
        }
    }

    render() {
        const {count: stateCount, redux} = this.state;
        const {count: reduxCount} = this.props;

        const count = redux ? reduxCount : stateCount;
        const color = redux ? '#FF5370' : '#0136FB';

        return (
            <View style={styles.container}>
                <View style={styles.refreshArea}>
                    <Button label={ru.refresh}
                            onClick={this.refresh}
                            style={styles.refreshButton}
                            textStyle={{color: 'white'}}
                    />
                </View>
                <View style={styles.counter}>
                    <Button label={`${ru.switch_to} ${redux ? 'STATE' : 'REDUX'}`}
                            style={{...styles.switchButton, backgroundColor: color, borderWidth: 0}}
                            textStyle={{color: 'white'}}
                            onClick={() => {
                                this.setState({redux: !redux}, async () => {
                                    await AsyncStorage.setItem('isRedux', !redux ? '1' : '0')
                                })
                            }}
                    />
                    <Text style={{...styles.text, color}}>{count}</Text>
                    <View style={styles.buttonsArea}>
                        <Button label={'-'}
                                onClick={() => this.onChangeCounter( count - 1)}
                                textStyle={styles.countButton}
                        />
                        <Button label={'+'}
                                onClick={() => this.onChangeCounter( count + 1)}
                                textStyle={styles.countButton}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    count: state.count
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        changeCount,
    }, dispatch)
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
