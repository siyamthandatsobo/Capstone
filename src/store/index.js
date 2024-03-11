// Import necessary libraries and dependencies
import { createStore } from 'vuex';
import axios from 'axios';
import VueCookies from 'vue-cookies'; // Import VueCookies library
import router from '@/router';

// Set up Axios configurations
axios.defaults.withCredentials = true;
const baseUrl = 'http://localhost:9000';

// Create and export the Vuex store
export default createStore({
  // Define the store's initial state
  state: {
    Products: [], // Array to store products
    cart: [], // Array to store cart data
    user: [], // Array to store user information
    loggedIn: false, // Flag indicating if the user is logged in
  },
  // Define getters for accessing state properties
  getters: {
    // Add any getters if needed
  },
  // Define mutations to update state
  mutations: {
    // Mutation to set the product data
    setProducts(state, payload) {
      state.Products = payload;
    },
    // Mutation to set the cart data
    setCart(state, cartData) {
      state.cart = cartData;
    },
    // Mutation to set user information and update login status
    setUser(state, user) {
      state.user = user;
      state.loggedIn = true;
    },
    // Add other mutations if needed
  },
  // Define actions to perform asynchronous tasks and update state through mutations
  actions: {
    // Action to get products from the server and commit mutation to set the product data
    async getProducts({ commit }) {
      try {
        const { data } = await axios.get(`${baseUrl}/products`);
        commit('setProducts', data);
      } catch (error) {
        console.error('Error getting products:', error);
      }
    },
    // Action to add a new product and reload the page
    async addProduct({ commit }, newproduct) {
      try {
        const { data } = await axios.post(`${baseUrl}/products`, newproduct);
        commit('setProducts', data);
        window.location.reload();
      } catch (error) {
        console.error('Error adding product:', error);
      }
    },
    // Action to delete a product and reload the page
    async deleteProduct({ commit }, prodID) {
      try {
        await axios.delete(`${baseUrl}/products/${prodID}`);
        window.location.reload();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    },
    // Action to add a product to the cart and update the cart data
    async addProductToCart({ commit, state }, { prodID, quantity }) {
      try {
        // Check if the user is logged in
        if (!state.loggedIn) {
          console.error('User not logged in');
          return;
        }

        // Get the user's token from local storage
        const token = localStorage.getItem('jwt');

        // Send the request to add the product to the cart with the quantity
        await axios.post(
          `${baseUrl}/order`,
          { prodID, userID: state.user.userID, quantity },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Fetch the updated cart and commit mutation to set the cart data
        const { data: updatedCart } = await axios.get(`${baseUrl}/order/user`);
        commit('setCart', updatedCart);

        // ... rest of the code ...
      } catch (error) {
        console.error('Error adding product to cart:', error.message);
        console.error('Error details:', error.response);
      }
    },
    async deleteProdFromCart({ commit }, prodID) {
      try {
        await axios.delete(`${baseUrl}/order/${prodID}`);
        // window.location.reload();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    },
    // Action to edit a product and reload the page
    async editProduct({ commit }, update) {
      try {
        await axios.patch(`${baseUrl}/products/${update.prodID}`, update);
        window.location.reload();
      } catch (error) {
        console.error('Error editing product:', error);
      }
    },
    // Action to handle user login
    async login(context, userLogin) {
      try {
        let { data } = await axios.post(baseUrl + '/login', userLogin);

        // Extract user information and token from the response
        const { user, token } = data;

        // Set the user and loggedIn state in the store
        context.commit('setUser', user);

        // Set the token in local storage (if needed)
        localStorage.setItem('jwt', token);

        // Alert and navigate to the home page
        alert('You have logged in');
        await router.push('/');
        // window.location.reload();
      } catch (error) {
        console.error('Error logging in:', error);
      }
    },
    // Action to handle user logout
    async logout(context) {
      try {
        // Remove the token from local storage
        localStorage.removeItem('jwt');

        // Reload the page
        // window.location.reload();

        // Send a request to log out on the server
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
