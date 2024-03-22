// Import necessary libraries and dependencies
import { createStore } from 'vuex';
import axios from 'axios';
import router from '@/router';
import sweet from 'sweetalert';
import VueCookies from 'vue-cookies';

// Set up Axios configurations
const baseUrl = 'https://capstone-opj5.onrender.com';
axios.defaults.withCredentials = true;

export default createStore({
  state: {
    users: null,
    user: null,
    Products: null,
    product: null,
    cart: [],
    Cart:[],
    selectedCategory: '', 
    
    productQuantity: 1,
    searchQuery: '',
    token: VueCookies.get('jwt') || null, // Initialize token from cookie
    loggedIn: !!VueCookies.get('jwt'),
    
  },
  getters: {
    isLoggedIn: state => !!state.token,
    currentUser: state => state.user,
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
    setCartAll(state, payload) {
      state.Cart = payload;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
      state.loggedIn = !!user;
      console.log('loggedIn:', state.loggedIn); // Add this line to log the value of loggedIn

    },
    setProductQuantity(state, quantity) {
      state.productQuantity = quantity;
    },
    removeFromCart(state, prodID) {
      state.cart = state.cart.filter(item => item.id !== prodID);
    },
    setToken(state, token) {
      state.token = token;
      console.log(token)
    },
    setUserCookie(state, user) {
      VueCookies.set('user', JSON.stringify(user)); // Set user information in cookie
    },

    setUserFromCookie(state) {
      const userCookie = VueCookies.get('user');
      if (userCookie) {
        state.user = JSON.parse(userCookie);
      }
    },
    updateSelectedCategory(state, category) {
      state.selectedCategory = category;
    },
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
    async getAllOrders({ commit }) {
      try {
        const { data } = await axios.get(`${baseUrl}/order/all`);
        console.log(data)
        commit('setCartAll', data);
      } catch (error) {
        console.error('Error getting cart:', error);
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
    async addProductToCart({ commit }, { prodID, quantity }) {
      try {
        const userID = VueCookies.get('userID'); // Retrieve user ID from cookie
        if (!userID) {
          console.error('User ID not found in cookie');
          return;
        }
    
        // Only add the product to the cart if a quantity is provided
        if (!quantity || quantity <= 0) {
          console.error('Invalid quantity provided');
          return;
        }
    
        // Add the product to the cart database table
        await axios.post(
          `${baseUrl}/order`,
          { prodID, userID, quantity } // Use userID from cookie
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
        const { data } = await axios.post(baseUrl + '/login', userLogin);
        const { token, user } = data; // Extract token and user information from response data
  
        // Save token and user information in Vuex state
        VueCookies.set('jwt', token);
        context.commit('setToken', token);
        VueCookies.set('setUserCookie', JSON.stringify(user));
  
        // Save token and user information in cookies
 // Set cookie expiration as needed
    VueCookies.set('userRole', user.userRole);
        VueCookies.set('userID', user.userID);
        VueCookies.set('user', JSON.stringify(user));

  
        // Show success message using SweetAlert
        sweet('Success', data.msg, 'success');
        window.location.reload(); // You might want to update the state instead of reloading the entire page
  
  
        await router.push('/'); // Navigate to home page
      } catch (error) {
        console.error('Error logging in:', error);
        // Show error message using SweetAlert
        sweet('Error', 'Failed to log in', 'error');
      }
    },    
    
    // async login({ commit }, userLogin) {
    //   try {
    //     const { data } = await axios.post(baseUrl + '/login', userLogin);
    //     const { token } = data;

    //     // Save token in Vuex state
    //     commit('setToken', token);
    //     commit('setLoggedIn', true); // Set loggedIn to true after successful login

    //     // Save token in cookie
    //     VueCookies.set('jwt', token, { expires: '7d' }); // Set cookie expiration as needed

    //     sweet('Success', 'Login successful!', 'success');
    //     await router.push('/logout');
    //   } catch (error) {
    //     console.error('Error logging in:', error);
    //     sweet('Error', 'Failed to log in', 'error');
    //   }
    // },
    async logout(context) {
      try {
        VueCookies.remove('jwt'); // Remove JWT token from cookie
        VueCookies.remove('userID'); // Remove user information from cookie
        VueCookies.remove('userRole'); // Remove userRole information from cookie
        VueCookies.remove('setUserCookie'); // Remove userRole information from cookie
  
        // Clear token and user information from Vuex state
        context.commit('setToken', null);
        context.commit('setUserCookie', null); // Set user information in cookie
  
        // Show success message using SweetAlert
        sweet('Success', 'Logged out successfully!', 'success');
        window.location.reload();
        await router.push('/'); // Navigate to logout page
      } catch (error) {
        console.error('Error logging out:', error);
        // Show error message using SweetAlert
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
},
async deleteOrder({ commit }, orderID) {
  try {
    await axios.delete(`${baseUrl}/order/${orderID}`);
    sweet('Success', 'Order deleted successfully!', 'success');
    window.location.reload(); // You might want to update the state instead of reloading the entire page
  } catch (error) {
    console.error('Error deleting order:', error);
    sweet('Error', 'Failed to delete order', 'error');
  }
},

async editOrderQuantity({ commit }, { quantity, orderID }) {
  try {
    const response = await axios.patch(`${baseUrl}/order/${orderID}`, { quantity });
    console.log(response.data); // Log the response if needed
    sweet('Success', 'Order quantity updated successfully!', 'success');
    // You might want to update the state to reflect the new quantity
  } catch (error) {
    console.error('Error editing order quantity:', error);
    sweet('Error', 'Failed to update order quantity', 'error');
  }
}
},
modules: {},
// created() {
//   const tokenCookie = VueCookies.get('jwt');
//   const userCookie = VueCookies.get('user');

//   if (tokenCookie) {
//     this.commit('setToken', tokenCookie);
//     this.state.loggedIn = true; // Set loggedIn to true if token exists
//   }

//   if (userCookie) {
//     this.commit('setUser', JSON.parse(userCookie));
//   }
// }
});
