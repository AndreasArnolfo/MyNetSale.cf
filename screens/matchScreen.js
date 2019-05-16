import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

import CardStack, { Card } from 'react-native-card-stack-swiper';


export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>


                <CardStack
                    style={styles.content}

                    renderNoMoreCards={() => <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray' }}>No more cards :(</Text>}
                    ref={swiper => {
                        this.swiper = swiper
                    }}

                    onSwiped={() => console.log('onSwiped')}
                    onSwipedLeft={() => console.log('onSwipedLeft')}
                >
                    <Card style={[styles.card, styles.card1]}>
                        <Image
                            source={
                                require('../assets/images/robe.jpg')
                            }
                            style={styles.welcomeImage}
                        />
                    </Card>
                    <Card style={[styles.card, styles.card2]}>
                        <Image
                            source={
                                require('../assets/images/montre.jpg')
                            }
                            style={styles.welcomeImage}
                        />
                    </Card>
                    <Card style={[styles.card, styles.card1]}>
                        <Image
                            source={
                                require('../assets/images/lv.jpg')
                            }
                            style={styles.welcomeImage}
                        />
                    </Card>
                    <Card style={[styles.card, styles.card2]}>
                        <Image
                            source={
                                require('../assets/images/peing.jpg')
                            }
                            style={styles.welcomeImage}
                        />
                    </Card>
                    <Card style={[styles.card, styles.card1]}>
                        <Image
                            source={
                                require('../assets/images/bab.jpg')
                            }
                            style={styles.welcomeImage}
                        />
                    </Card>

                </CardStack>


                <View style={styles.footer}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.button, styles.red]} onPress={() => {
                            this.swiper.swipeLeft();
                        }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.orange]} onPress={() => {
                            this.swiper.goBackFromLeft();
                        }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.green]} onPress={() => {
                            this.swiper.swipeRight();
                        }}>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f2f2f2',
    },
    content: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeImage : {
        width: 320,
        height: 470,
        borderRadius: 5,
    },
    card: {
        width: 320,
        height: 470,
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.5,
    },
    card1: {
        backgroundColor: '#FE474C',
    },
    card2: {
        backgroundColor: '#FEB12C',
    },
    label: {
        lineHeight: 400,
        textAlign: 'center',
        fontSize: 55,
        fontFamily: 'System',
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        width: 220,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
    },
    orange: {
        width: 55,
        height: 55,
        borderWidth: 6,
        borderColor: 'rgb(246,190,66)',
        borderWidth: 4,
        borderRadius: 55,
        marginTop: -15
    },
    green: {
        width: 75,
        height: 75,
        backgroundColor: '#fff',
        borderRadius: 75,
        borderWidth: 6,
        borderColor: '#01df8a',
    },
    red: {
        width: 75,
        height: 75,
        backgroundColor: '#fff',
        borderRadius: 75,
        borderWidth: 6,
        borderColor: '#fd267d',
    }
});