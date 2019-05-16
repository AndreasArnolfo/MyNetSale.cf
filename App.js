import React from 'react';
import { Platform, StatusBar, Image, StyleSheet, View } from 'react-native';
import { AppLoading, SplashScreen, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import { CartContext } from './context/CartContext';

export default class App extends React.Component {
  state = {
    items: [],
    timePassed: false
  };
  
  onAddItem = (item) => {
    this.setState(state => {
      var exists = false;
			const newState = state.items.map(currentItem => {
				if (currentItem.id === item.id) {
					exists = true;
					return {
						...currentItem,
						quantity: currentItem.quantity + item.quantity
					}
				} else {
					return currentItem
				}
      });
      if(exists) {
        return {
          items: newState
        }
      } else {
        return {
          items: [
            ...state.items,
            item
          ]
        }
      }
    });
  }

  onRemoveItem = (item) => {
    this.setState(state => {
      const remainingItems = [
        ...state.items.filter(i => i.id !== item.id)
      ]
      return {
        items: remainingItems
      }
    });
  }

  componentDidMount() {
    setTimeout( () => {
       this.setTimePassed();
    },3000);
  }
      
  setTimePassed() {
    this.setState({timePassed: true});
  }    
  
  render() {
    
    if (!this.state.timePassed) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image style={{ width: '100%', height: 100, }}
            source={require('./assets/images/splash.gif')}
          />
        </View>
      );
    } else {
      return (
        <CartContext.Provider
          value={{
            items: this.state.items,
            addItem: this.onAddItem,
            removeItem: this.onRemoveItem,
          }}
        >
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
        </CartContext.Provider>
      );
    }
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
