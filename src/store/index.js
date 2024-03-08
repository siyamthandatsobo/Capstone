import { createStore } from 'vuex';
import axios from 'axios';
import  VueCookies  from 'vue-cookies';
import router from '@/router';
axios.defaults.withCredentials = true;
const baseUrl = 'http://localhost:9000';

export default createStore({
  state: {
    Products: [],
    cart: VueCookies.get('userCart') || [], // Load cart data from cookie or initialize as empty array
    user: [], 
    loggedIn: false, // Assuming you have a loggedIn state
  },
  getters: {
    // Add any getters if needed
  },
  mutations: {
    setProducts(state, payload) {
      state.Products = payload;
    },
    addToCart(state, product) {
      // Check if the product already exists in the cart
      const existingProductIndex = state.cart.findIndex(
        (item) => item.prodID === product.prodID
      );
    
      if (existingProductIndex !== -1) {
        // Product already exists, update the quantity
        state.cart[existingProductIndex].quantity += product.quantity;
      } else {
        // Product doesn't exist, add it to the cart
        state.cart.push(product);
      }
    
      // Update the userCart cookie
      VueCookies.set('userCart', JSON.stringify(state.cart), '7d');
    },
    setUser(state, user) {
      state.user = user;
      state.loggedIn = true;
    },
    // Add other mutations if needed
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const { data } = await axios.get(`${baseUrl}/products`);
        commit('setProducts', data);
      } catch (error) {
        console.error('Error getting products:', error);
      }
    },
    async addProduct({ commit }, newproduct) {
      try {
        const { data } = await axios.post(`${baseUrl}/products`, newproduct);
        commit('setProducts', data);
        window.location.reload();
      } catch (error) {
        console.error('Error adding product:', error);
      }
    },
    async deleteProduct({ commit }, prodID) {
      try {
        await axios.delete(`${baseUrl}/products/${prodID}`);
        window.location.reload();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    },
    async addProductToCart({ commit, state }, product) {
      try {
        // Check if the user is logged in
        if (!state.loggedIn) {
          console.error('User not logged in');
          return;
        }
    
        // Send the request to add the product to the cart
        const { data } = await axios.post(`${baseUrl}/order`, {
          prodID: product.prodID,
          userID: state.user.userID,
        });
    
        // Assuming that the response data is the updated cart, modify this part if needed
        const updatedCart = data;
    
        // Find the product details from the Products array based on the prodID
        const productDetails = state.Products.find((p) => p.prodID === product.prodID);
    
        // Create a new object containing both the product details and the quantity
        const productInCart = {
          ...productDetails,
          quantity: updatedCart.length > 0 ? updatedCart[0].quantity : 0, // Modify this if the response data structure is different
          userID: state.user.userID, // Include userID in the cart information
        };
    
        // Update the cart in the store
        commit('addToCart', productInCart);
    
        // Log success or handle other logic as needed
        console.log('Product added to cart successfully:', productInCart);
      } catch (error) {
        console.error('Error adding product to cart:', error.message);
        console.error('Error details:', error.response);
      }
    },
    
    
    async editProduct({ commit }, update) {
      try {
        await axios.patch(`${baseUrl}/products/${update.prodID}`, update);
        window.location.reload();
      } catch (error) {
        console.error('Error editing product:', error);
      }
    },
    async login(context, userLogin) {
      try {
        let { data } = await axios.post(baseUrl + '/login', userLogin);
    
        // Extract user information and token from the response
        const { user, token } = data;
    
        // Set the user and loggedIn state in the store
        context.commit('setUser', user);
    
        // Set the token in the cookie (if needed)
        // VueCookies.set('jwt', token);
    
        // Alert and navigate to the home page
        alert('You have logged in');
        await router.push('/');
        // window.location.reload();
      } catch (error) {
        console.error('Error logging in:', error);
      }
    },
    async logout(context) {
      try {
        let cookies = VueCookies.keys();
        console.log(cookies);
        VueCookies.remove('jwt');
        window.location.reload();
        let { data } = await axios.delete(baseUrl + '/logout');
        alert(data.msg);
      } catch (error) {
        console.error('Error logging out:', error);
      }
    },
  }, // Add a comma here
  modules: {
    // Add any modules if needed
  },
});
