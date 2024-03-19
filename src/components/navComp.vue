<template>
  <div>
    <div class="modals text-white">
      <a href="#">Free delivery</a>
      <router-link v-if="!$store.state.loggedIn" to="/login">Login</router-link>
      <a href="#">Manage cookies</a>
    </div>

    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <!-- Logo -->
        <router-link class="navbar-brand" to="/">
          <img src="https://i.ibb.co/9rR4Bjj/Royal.png" alt="Royal Footwear" width="50" height="50">
        </router-link>
        
        <!-- Toggler/collapsible Button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    
        <!-- Navbar links -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Men</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Women</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Kids</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Profile">Profile</router-link>
            </li>
          </ul>
  
          <!-- Cart icon -->
          <router-link class="nav-link" to="/cart">
            <i class="bi bi-cart"><img src="https://i.ibb.co/SsH8Sbs/icons8-shopping-bag.gif" alt="Royal Footwear" width="50" height="50"></i>
          </router-link>
          
          <!-- Logout button -->
          <button v-if="$store.state.loggedIn" @click="logout">Logout</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      // Logout action
      this.$store.dispatch('logout');
    }
  }
};
</script>

<style scoped>
.navbar-nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.navbar-nav .nav-item {
  flex: 1; /* Each nav item takes equal space */
  text-align: center; 
  font-family: monospace;
  font-size: 20px;
  font-weight: 200; /* Center aligns the text */
}

/* Add more styles as needed */

.modals {
  display: flex;
  justify-content: space-around;
  background: #070707;
  padding: 3px;
}

.modals a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 14px;
}

.modals a:hover {
  text-decoration: underline;
}
</style>
