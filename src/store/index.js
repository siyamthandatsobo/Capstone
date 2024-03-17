// Import necessary libraries and dependencies
import { createStore } from 'vuex';
import axios from 'axios';
import router from '@/router';
import sweet from 'sweetalert';
import VueCookies from 'vue-cookies';

// Set up Axios configurations
axios.defaults.withCredentials = true;
const baseUrl = 'http://localhost:9000';

export default createStore({
  state: {
    users: null,
    user: null,
    Products: null,
    product: null,
    cart: [],
    loggedIn: false,
    productQuantity: 1,
    searchQuery: '',
  },
  getters: {
    filteredProducts(state) {
      const query = state.searchQuery.toLowerCase().trim();
      if (!query) {
        return state.products;
      } else {
        return state.products.filter(product => {
          return (
            product.prodName.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
          );
        });
      }
    }
  },
  
  mutations: {
    setProducts(state, payload) {
      state.Products = payload;
    },
    setProduct(state, value) {
      state.product = value;
    },
    setCart(state, payload) {
      state.cart = payload;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
      state.loggedIn = !!user;
    },
    setProductQuantity(state, quantity) {
      state.productQuantity = quantity;
    },
    removeFromCart(state, prodID) {
      state.cart = state.cart.filter(item => item.id !== prodID);
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    }
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const { data } = await axios.get(`${baseUrl}/products`);
        console.log(data)
        commit('setProducts', data);
      } catch (error) {
        console.error('Error getting products:', error);
      }
    },
    async getOrderItemsByUser({ commit, state }) {
      try {
        const { data } = await axios.get(`${baseUrl}/order/user`);
        commit('setCart', data);
      } catch (error) {
        console.error('Error getting order items by user:', error);
      }
    },
  
    async addProduct({ commit }, newproduct) {
      try {
        const { data } = await axios.post(`${baseUrl}/products`, newproduct);
        commit('setProducts', data);
        sweet('Success', 'Product added successfully!', 'success');
        window.location.reload();
      } catch (error) {
        console.error('Error adding product:', error);
        sweet('Error', 'Failed to add product', 'error');
      }
    },
    async deleteProduct({ commit }, prodID) {
      try {
        await axios.delete(`${baseUrl}/products/${prodID}`);
        sweet('Success', 'Product deleted successfully!', 'success');
        window.location.reload();
      } catch (error) {
        console.error('Error deleting product:', error);
        sweet('Error', 'Failed to delete product', 'error');
      }
    },
    async addProductToCart({ state }, { prodID, quantity }) {
      try {
        if (!state.loggedIn) {
          console.error('User not logged in');
          return;
        }
        
        const token = VueCookies.get('jwt');
        
        // Only add the product to the cart if a quantity is provided
        if (!quantity || quantity <= 0) {
          console.error('Invalid quantity provided');
          return;
        }
    
        // Add the product to the cart database table
        await axios.post(
          `${baseUrl}/order`,
          { prodID, userID: state.user.userID, quantity },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        
        sweet('Success', 'Product added to cart successfully!', 'success');
      } catch (error) {
        console.error('Error adding product to cart:', error.message);
        console.error('Error details:', error.response);
        sweet('Error', 'Failed to add product to cart', 'error');
      }
    },
    async deleteProdFromCart({ commit, state }, prodID) {
      try {
        await axios.delete(`${baseUrl}/order/${prodID}`);
        commit('removeFromCart', prodID); // Create a mutation to remove the item from the cart
        sweet('Success', 'Product removed from cart successfully!', 'success');
        window.location.reload();

      } catch (error) {
        console.error('Error deleting product:', error);
        sweet('Error', 'Failed to remove product from cart', 'error');
      }
    },
    async updateProduct(context, payload) {
      try {
        let response = await axios.patch(`${baseUrl}/products/${payload.id}`, payload.data);
    console.log(response)
        let { data } = response; // Updated to use data
    console.log(data)
        if (data.msg) {
          context.dispatch('getProductById');
          sweet({
            title: 'Update Product',
            text: data.msg,
            icon: 'success',
            timer: 2000,
            
          });
          window.location.reload();
    
        }
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when updating a product.',
          icon: 'error',
          timer: 2000,
        });
      }
    },
    
    async login(context, userLogin) {
      try {
        let { data } = await axios.post(baseUrl + '/login', userLogin);
        const { user, token } = data;
        
        // Save user information and token in cookies
        VueCookies.set('user', JSON.stringify(user));
        VueCookies.set('jwt', token);
        
        // Update Vuex store with user info
        context.commit('setUser', user);
        
        sweet('Success', 'Login successful!', 'success');
        await router.push('/');
      } catch (error) {
        console.error('Error logging in:', error);
        sweet('Error', 'Failed to log in', 'error');
      }
    },
    
    
   
  
    async logout(context) {
      try {
        VueCookies.remove('user');
        VueCookies.remove('jwt');
        context.commit('setUser', null);

        sweet('Success', 'Logout successful!', 'success');
        window.location.reload();
        await router.push('/');
       

      } catch (error) {
        console.error('Error logging out:', error);
        sweet('Error', 'Failed to log out', 'error');
      }
    },
    async getProductById({ commit }, prodID) {
  console.log('Product ID:', prodID);

  try {
    const { data } = await axios.get(`${baseUrl}/products/${prodID}`);
    commit('setProduct', data);
  } catch (error) {
    console.error('Error getting product by ID:', error);
  }
},
async fetchUsers({ commit }) {
  try {
    const { data } = await axios.get(`${baseUrl}/users`);
    commit('setUsers', data);
  } catch (error) {
    console.error('Error getting products:', error);
  }
},
async updateUser(context, payload) {
  try {
    let response = await axios.patch(`${baseUrl}/users/${payload.id}`, payload.data);
console.log(response)
    let { data } = response; // Updated to use data
console.log(data)
    if (data.msg) {
      context.dispatch('fetchUsers');
      sweet({
        title: 'Update user',
        text: data.msg,
        icon: 'success',
        timer: 2000,
        
      });
      window.location.reload();

    }
  } catch (e) {
    sweet({
      title: 'Error',
      text: 'An error occurred when updating a user.',
      icon: 'error',
      timer: 2000,
    });
  }
},
async deleteUser({ commit }, userID) {
  try {
    await axios.delete(`${baseUrl}/users/${userID}`);
    sweet('Success', 'User deleted successfully!', 'success');
    window.location.reload();
  } catch (error) {
    console.error('Error deleting user:', error);
    sweet('Error', 'Failed to delete user', 'error');
  }
},
async addUser({ commit }, newuser) {
  try {
    const { data } = await axios.post(`${baseUrl}/users`, newuser);
    commit('setUsers', data);
    sweet('Success', 'User added successfully!', 'success');
    window.location.reload();
  } catch (error) {
    console.error('Error adding User:', error);
    sweet('Error', 'Failed to add User', 'error');
  }
}
  },
  modules: {},
});
