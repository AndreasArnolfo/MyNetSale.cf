import WooCommerceAPI from 'react-native-woocommerce-api';


var WoooCommerceAPI = new WooCommerceAPI({
  url: 'https://mynetsales.tk/', // Your store URL
  ssl: true,
  consumerKey: 'ck_c6d1978cca231265c0de9de3e7d2e52f88019b44', // Your consumer secret
  consumerSecret: 'cs_1cc8b902483429fe7965ccf1aa3ad84f0375da79', // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: 'wc/v2', // WooCommerce WP REST API version
  queryStringAuth: true
});

var arrayProducts = [];
var datas = WoooCommerceAPI.get('products', {})
  .then(data => {
    Object.keys(data).map((res)=>{
      arrayProducts.push(data[res]);
    })
  })
  .catch(error => {
    console.log(error)
  })

export const products = arrayProducts ;


