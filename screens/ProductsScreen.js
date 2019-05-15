import React from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

import WooApi from '../constants/Api';

export default class ProductsScreen extends React.Component {
  static navigationOptions = {
    title: 'Articles',
  };

  state = {
    products: []
  }

  fetProducts = () => {
    const url = `${WooApi.url.wc}products?per_page=20&consumer_key=${WooApi.keys.consumerKey}&consumer_secret=${WooApi.keys.consumerSecret}`;
    axios.get(url)
    .then(response => this.setState({ products: response.data }))
    .catch(error => console.log('error',error));
  }
  
  componentWillMount() {
    this.fetProducts();
  }

  renderItem = ({item}) => (
    <TouchableOpacity 
      style={styles.listItem} 
      onPress={() => this.props.navigation.navigate("SingleProduct", { product: item })}
    >
      <View style={styles.view}>
        <Image style={styles.image} source={{ uri: item.images[0].src }} />
       <View style={styles.label}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>Prix: {item.price}€</Text>
       </View>
      </View>
    </TouchableOpacity>
  )

  render() {
    return (
      <ScrollView style={styles.container}>
        {
          this.state.products.length ?
          <FlatList
            contentContainerStyle={styles.list} 
            numColumns={1}
            data={this.state.products}
            keyExtractor={ item => item.id.toString() }
            renderItem={this.renderItem}
          />
          :
          <View style={styles.loaderContainer}>
            <Image
              source={ require('../assets/images/cart-loading.gif') }
              style={styles.loaderImage}
            />
          </View>
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f6f6f6',
  },
  list: {
    flexDirection: 'column'
  },
  view: {
    padding: 10
  },
  image: {
    flex:1,
    height: 300
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    padding: 5,
  },
  loaderContainer: {
    alignItems: 'center', 
    justifyContent: 'center',
  },
  loaderImage: {
    width: 200,
    height: 200,
  },
  label: {
    backgroundColor: '#C48751',
    opacity : 0.8
  }
});
