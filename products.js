import WooCommerceAPI from 'react-native-woocommerce-api';
 
var WoooCommerceAPI = new WooCommerceAPI({
  url: 'https://mynetsale.cf/index.php', // Your store URL
  ssl: true,
  consumerKey: 'ck_f1d78e33d3f0cbf4030a1de4838f6c29d5b60ea5', // Your consumer secret
  consumerSecret: 'cs_cbd6ddad0f2a49ed388fb31e3d1ffc4f6ee1048f', // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: 'wc/v2', // WooCommerce WP REST API version
  queryStringAuth: true
});

WoooCommerceAPI.get('products',{})
.then(data => {
  console.log(data)
})
.catch(error => {
  console.log(error)
})

export const products = [
  {
    uri:
      "https://i.pinimg.com/564x/c4/85/18/c48518a3605711c48db1f04039815702.jpg",
    name: 'coucou',
    price: "12"
  }
];