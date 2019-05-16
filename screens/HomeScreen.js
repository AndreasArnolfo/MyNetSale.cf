import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                require('../assets/images/mynetsale-logo.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
          <Image
              source={
                require( '../assets/images/bgbg.png')
              }
              style={styles.welcomeImage}
            />          </View>
          <Button color="#D2B384" title="Boutique" onPress={() => this.props.navigation.navigate("Products")} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  title: {
    fontSize: 22,
    paddingBottom: 10
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 300,
    height: 240,
    resizeMode: 'contain',
    marginBottom: -30,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    
  },
  
  helpLink: {
    paddingVertical: 15,
  },
  sliderImage: {
    height: 360,
    width: 360
  }
});
